import fetch from "cross-fetch";

export class RequestHandler {
	public static async handle(url: string, method?: string): Promise<string[]>;
	public static async handle<T>(url: string, method?: string): Promise<T>;
	public static async handle<T>(url: string, method = "GET"): Promise<T | string[]> {
		const res = await fetch(url, { method });
		const json = await res.json();

		if (res.status === 200) return json;
		throw new Error(`${json.status} ${json.error}\n${JSON.stringify(json, null, 2)}`);
	}
}
