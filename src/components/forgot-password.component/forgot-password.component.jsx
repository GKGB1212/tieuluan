import React from "react";
import './forgot-password.styles.css'

const ForgotPasswordForm = () => {
    const dangki=1;
    return (
        <main class="mainLoginForm">
            <div class="loginDiv">
                <form class="loginForm">
                    <div class="inputLoginDiv">
                        <div>
                            <input type="tel" placeholder="Nhập SĐT của bạn" autocomplete="nope" />
                            <button tabindex="-1" type="button">
                                <span class="clear">
                                </span>
                            </button>
                        </div>
                        <p class="prswihc">
                        </p>
                    </div>
                    <button class="buttonLogin accent r-normal medium w-normal i-left stretch" type="submit">Lấy lại mật khẩu</button>
                </form>
            </div>
        </main>
    )

}
export default ForgotPasswordForm;