// Programmer assumes: user might be null or valid
let name = user.getName();  // Assumes: user is not null
let email = user.getEmail(); // Assumes: user is not null

if (user == null) {  // Assumes: user might be null
    return defaultUser();  // But would have crashed above if true!
}