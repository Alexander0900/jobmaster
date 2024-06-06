export const setUserData = (userData) => {
    localStorage.setItem(
        'userData',
        JSON.stringify(userData)
    );
}