import { stringify } from "querystring";


class DataHandler {
    private static NULL_VALUES = ["NONE", "-1", -1, "-", "Not Found", "Unavailable"];

    public static castNulls<T>(data: T): T {
        for (const key of Object.keys(data)) {
            switch (typeof data[key]) {
                case "string":
                case "number":
                    if (this.NULL_VALUES.includes(data[key]))
                        delete data[key];
                    break;
                case "object":
                    if (data[key] === null || this.NULL_VALUES.includes(data[key].name)) delete data[key];
                    break;
            }
        }

        return { ...data };
    }
}

export { DataHandler };
