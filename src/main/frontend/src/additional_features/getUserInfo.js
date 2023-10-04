//
// "type 0 = nickname, type 1 = id, type 2 = profileImageURL, type 3 = email"
export default function getUserInfo(type) {
    if (document.cookie.split("userInfo=")[1].length > 0) {
        try {
            const encoded = document.cookie.split("userInfo=")[1];

            return decodeURIComponent(escape(window.atob(encoded))).split(",")[type].split("=")[1].split("}")[0]
        } catch (e) {

        }
    }
    else{}
};