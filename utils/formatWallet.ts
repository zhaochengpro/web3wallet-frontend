export function formatWallet(str: string) {
  if (str.length > 8) {
    return str.substring(0, 6) + '...' + str.substring(str.length - 6)
  }
  return str || ''
}

export function formatCopyWallet(str: string) {
  if (str.length > 10) {
    return str.substring(0, 18) + '...' + str.substring(str.length - 8)
  }
  return str || ''
}

export function formatCopyWalletMobile(str: string) {
  if (str.length > 10) {
    return str.substring(0, 6) + '...' + str.substring(str.length - 4)
  }
  return str || ''
}
