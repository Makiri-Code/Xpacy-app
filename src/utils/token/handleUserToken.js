const isTokenExpired = (userToken, setTokenRole=()=>{}) => {
    if (!userToken) {
      return true; // If no token is found, consider it expired
    }
    try {
      // Decode the JWT payload (middle part of the token)
      const payloadBase64 = userToken.split('.')[1]; // JWT structure: header.payload.signature
      const payload = JSON.parse(atob(payloadBase64)); // Decode Base64 to JSON
      setTokenRole(payload.role)
      const now = Math.floor(Date.now() / 1000); // Current time in seconds
  
      if (payload.exp < now) {
        return true; // Token is expired
      }
      return false; // Token is still valid
    } catch (error) {
      console.error('Error decoding token:', error);
      return true; // Treat any decoding error as an expired token
    }
  };

  export default isTokenExpired;