import * as bcrypt from 'bcrypt';

export const encryptPassowrd = async (password): Promise<string> => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}

export const comparePassword = (password, hash): Promise<boolean> => {
    return bcrypt.compare(password, hash);
}