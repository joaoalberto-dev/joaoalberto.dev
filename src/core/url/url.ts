interface Url {
  url?: URL;
  setBaseUrl(baseUrl: string): void;
  addPath(path: string): void;
  addQueryParam(name: string, value: string): void;
  getUrl(): string | null;
  reset(): void;
}

export class UrlBuilder implements Url {
  url?: URL;

  constructor(baseUrl: string) {
    this.setBaseUrl(`${baseUrl}?`);
  }

  setBaseUrl(baseUrl: string) {
    this.url = new URL(baseUrl);
  }

  addPath(path: string) {
    if (this.url) {
      this.url.pathname = this.url.pathname.concat(path);
    }
  }

  addQueryParam(name: string, value: string) {
    this.url?.searchParams.set(name, value);
  }

  getUrl() {
    if (!this.url || !this.url.toString) return null;

    const url = this.url.toString();
    this.reset();

    return url;
  }

  reset() {
    this.url = undefined;
  }
}
