export const messages  = {
    NAME_MISSING : "Please enter your name",
    MOBILE_MISSING : "Please enter your mobile number",
    EMAIL_MISSING :"Please enter your email",
    NAME_ERROR : "Please enter valid name",
    EMAIL_ERROR : "Please enter valid email",
    MOBILE_NUMBER_ERROR : "Please enter valid mobile number",
    USER_NAME_MISSING :"Please enter your name",

}

export const EMAIL_REGEX_PATTERN = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
export const NAME_REGEX_PATTERN = new RegExp(/^((([a-zA-Z])+\s?){3,})*$/) 
export const MOBILE_REGEX_PATTERN = new RegExp(/^[6-9][0-9]{9}$/)
