function checkAll(){
    if (!chech/UserID(form.userId.value)){
        return false;
    } else if (!checkPassword(form.userId.value, form.password1.value, form.password2.value)){
        return false;
    }
    return true;
}