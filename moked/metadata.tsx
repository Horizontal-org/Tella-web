import { FileObj, DeviceObj, EnvironmentObj, Location } from '../domain/Metadata'

export const FileMokedData: FileObj = {
  "File hash": "9F96F8F52D2EDFBE07AFA9E2626768B3433FA2087E8C980AD69CEC8AA60B9635",
  "File path": "media",
  "File name": "77c96227-97b1-4174-a8db-b1097834fad0.jpg",
}

export const DeviceMokedData: DeviceObj = {
  "Manufacturer": "Xiaomi",
  "Hardware": "Xiaomi Redmi Note 8",
  "Device ID": "bd717872-8f85-41ea-a233-cdcb6c5c4a01",
  "Screen size": "5.827525745",
  "Locale": "USA",
  "Language": "español",
  "Network type": "WiFi",
  "Network": "Connected",
  "Data type": "Mobile Data 4G",
  "WiFi MAC": "2c:ee:d6:1a:aa:32",
  "IPv6": "2801:1E8:3:0:6AEE:1352:E7ED:6BB3 FE80::742F:5D1F:628E:CB0",
  "IPv4": "10.5.1.2",
}

export const LocationMokedData: Location = {
  "Location accuracy": "92.9",
  "Location altitude": "0",
  latitude: -31.8250154,
  longitude: -64.4297871,
  "Location timestamp": "1611151983751",
}

export const EnvMokedData: EnvironmentObj = {
  "Timestamp": "1611151988325",
  "Ambient temperature": "0",
  "Light": "12.58481",
  "Location accuracy": "92.9",
  "Location altitude": "0",
  "Location latitude": "-31.8250154",
  "Location longitude": "-64.4297871",
  "Location timestamp": "1611151983751",
  "Location provider": "fused",
  "Location speed": "0",
  "Cells": "[MCC: 722  MNC: 34  Cell ID: 13259734] [MCC: 2147483647  MNC: 2147483647  Cell ID: 2147483647]",
  "WiFis": "[home-c31s1] [LiMe.ql-b6aa8e]",
}
