import { Client } from "../client/Client";

const client = new Client();

const ability = {
    dbid: 1542,
    name: 'Blaze',
    description: 'Powers up Fire-type moves when the Pokemon has low HP.'
}

test('returns what I was expecting', async () => {
    const response = await client.ability.fetch("Torrent");

    expect(response).toMatchShapeOf(ability)
})