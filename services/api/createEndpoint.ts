import { classToPlain, plainToClass } from 'class-transformer'
import { compile } from 'path-to-regexp'

interface DtoConstructor<T> {
  new (): T
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'HEAD'

export class EndpointCreator {
  private baseUrl: string

  private authToken: string

  constructor(baseUrl: string, authToken: string) {
    this.baseUrl = baseUrl
    this.authToken = authToken
  }

  fetch(
    endpointUrl: string,
    option: { body?: string; method: HttpMethod; headers: Record<string, string> }
  ): Promise<Response> {
    return fetch(this.baseUrl + endpointUrl, {
      ...option,
      headers: {
        Authorization: `Basic ${this.authToken}`,
      },
    })
  }

  public static getUrl(
    path: string,
    params?: Record<string, unknown>,
    query?: Record<string, unknown>
  ): string {
    const toPath = compile(path, { encode: encodeURIComponent })
    const compiledPath = toPath(params)
    if (!query) return compiledPath

    const queryUrl = Object.keys(query).reduce((prev: string, act: string) => {
      return `${prev}&${act}=${query[act].toString()}`
    }, '')

    return `${compiledPath}?${queryUrl}`
  }

  public create<
    R,
    T,
    P extends Record<string, unknown> = Record<string, unknown>,
    Q extends Record<string, unknown> = Record<string, unknown>
  >(method: HttpMethod, path: string, dtoConstructor?: DtoConstructor<T>) {
    return async (data: R, params?: P, query?: Q): Promise<T> => {
      const result = await this.fetch(EndpointCreator.getUrl(path, params, query), {
        method,
        ...(method !== 'GET' && method !== 'HEAD'
          ? { body: JSON.stringify(classToPlain(data)) }
          : {}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = (await result.json()) as T
      return dtoConstructor ? plainToClass(dtoConstructor, json) : json
    }
  }
}
