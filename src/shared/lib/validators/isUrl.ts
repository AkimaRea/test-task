type UrlOptions = {
  protocols?: string[];
  allowRelative?: boolean;
  allowProtocolRelative?: boolean;
};

export function isUrl(str: string, opts: UrlOptions = {}): boolean {
  const { protocols = ['http', 'https'], allowRelative = false, allowProtocolRelative = false } = opts;

  if (allowRelative) {
    if (/^(\/|\.{1,2}\/|[^/:]+\/)/.test(str)) return true;
  }

  if (allowProtocolRelative && str.startsWith('//')) {
    try {
      const u = new URL('http:' + str);
      return true && (protocols.length === 0 || protocols.includes(u.protocol.replace(':', '')));
    } catch {
      return false;
    }
  }

  try {
    const u = new URL(str);
    const proto = u.protocol.replace(':', '');
    return protocols.length === 0 || protocols.includes(proto);
  } catch {
    return false;
  }
}
