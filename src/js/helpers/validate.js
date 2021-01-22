const regExpDic = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^[0-9a-zA-Z]{4,}$/,
};

/**
 * Function validate. Check inputs for forms.
 * @param {HTMLInputElement} el 
 * @return {Boolean} - Return true if input valid
 */

export function validate(el) {
    const RegExpName = el.dataset.required;
    console.log(RegExpName);
    if (!regExpDic[RegExpName]) {
        return true;
    }
    return regExpDic[RegExpName].test(el.value);
}

