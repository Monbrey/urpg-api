// import fetch from "cross-fetch";
// import { mocked } from "ts-jest/utils";
// import { Client } from "../client/Client";

// jest.mock("cross-fetch");
// const fetchMock = mocked(fetch, true);
// const { Response } = jest.requireActual("cross-fetch");

// const client = new Client();

// const list = ["Blaze", "Overgrow", "Torrent"];
// const ability = {
// 	dbid: 1542,
// 	name: "Blaze",
// 	description: "Powers up Fire-type moves when the Pokemon has low HP.",
// };
// const responseMock = { status: 200, data: undefined };

// test("should fetch list of abilities", async () => {
// 	responseMock.data = list;

// 	fetchMock.mockReturnValue(Promise.resolve(new Response(JSON.stringify(responseMock))));

// 	const response = await client.ability.list();
// 	expect(response).toEqual(list);
// });

// test("should fetch single ability", async () => {
// 	responseMock.data = ability;

// 	fetchMock.mockReturnValue(Promise.resolve(new Response(JSON.stringify(responseMock))));

// 	const response = await client.ability.fetch("Blaze");
// 	expect(response).toEqual(ability);
// });
