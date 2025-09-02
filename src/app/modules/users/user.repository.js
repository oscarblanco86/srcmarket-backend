import prisma from "#prisma/client.js"

export function findUserByEmail(email) {
    return prisma.user.findUnique({ where: { email } })
}

export function createUser(data) {
    return prisma.user.create({ data })
}

export function deleteUser(email) {
    return prisma.user.delete({ where: { email } })
}

export function updateUser(email, data) {
    return prisma.user.update({ where: { email }, data })
}   