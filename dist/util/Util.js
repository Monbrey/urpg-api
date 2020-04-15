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
