export function generateTokenKey(prefix: string, id: number) {
  return `SESS_${prefix}_${id}`
}

export function generateTokenKey1(prefix: string, id: number) {
  return `SESS_${prefix}_${id}_abc`
}

export function generateTokenKey2(prefix: string, id: number) {
  return `SESS_${prefix}_${id}_def`
}
