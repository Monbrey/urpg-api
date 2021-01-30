"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function castNulls(data) {
    const NULL_VALUES = ["NONE", "-1", -1, "-", "Not Found", "Unavailable"];
    for (const key of Object.keys(data)) {
        switch (typeof data[key]) {
            case "string":
            case "number":
                if (NULL_VALUES.includes(data[key]))
                    delete data[key];
                break;
            case "object":
                if (data[key] === null || NULL_VALUES.includes(data[key].name))
                    delete data[key];
                break;
        }
    }
    return Object.assign({}, data);
}
exports.castNulls = castNulls;
function flattenObjects(data) {
    if (typeof data !== "object")
        return;
    for (const key in data) {
        if (typeof data[key] === "object" && Object.keys(data[key]).every(k => ["dbid", "name"].includes(k))) {
            data[key] = data[key].name;
        }
    }
    return Object.assign({}, data);
}
exports.flattenObjects = flattenObjects;
