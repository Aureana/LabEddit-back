import { UserBusiness } from "../../src/business/UserBusiness"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { USER_ROLES } from "../../src/types2"

describe("GetAll", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("testar retornar uma lista de usuários", async () => {
        const userDB = await userBusiness.getAll()

        expect(userDB).toHaveLength(2)
        expect(userDB).toContainEqual(
            {
                id: "id-mock",
                name: "Normal Mock",
                email: "normal@email.com",
                password: "hash-bananinha",
                role: USER_ROLES.NORMAL,
                createdAt: expect.any(String),

            }
        )
        expect (userDB). toContainEqual(
            {
                id: "id-mock",
                name: "Admin Mock",
                email: "admin@email.com",
                password: "hash-bananinha",
                role: USER_ROLES.ADMIN,
                createdAt: expect.any(String),

            }
        )
    })


})