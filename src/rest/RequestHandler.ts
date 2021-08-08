import fetch from "cross-fetch";

export class RequestHandler {
	public static async handle(url: string, method?: string): Promise<string[]>;
	public static async handle<T>(url: string, method?: string): Promise<T>;
	public static async handle<T>(url: string, method = "GET"): Promise<T|string[]> {
		const res = await fetch(url, { method });
		const json = await res.json();
		if (json.status === 200) return json.data;
		throw new Error(json.data);
	}
}
