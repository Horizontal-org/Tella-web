export interface FileEndpoints {
  fetch: (
    data: unknown,
    params?: {
      reportId: string
      fileId: string
    },
    query?: Record<string, unknown>
  ) => Promise<string>
}
