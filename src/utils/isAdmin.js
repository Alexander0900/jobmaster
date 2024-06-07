import { ROLES } from "../config";

export const isAdmin = (roles) => roles?.includes(ROLES.ADMIN);
