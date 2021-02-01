import { Report } from '../domain/Report'
import { FilesMokedData } from './files'

export const FakeReport: Report = {
  name: 'Cops ask for bribe',
  id: 'uuid-abc123',
  reporter: {
    name: 'Raphael Mimoun',
    id: 'uuid-123abc',
  },
  date: 1609864249034,
  files: [...FilesMokedData, ...FilesMokedData],
}
