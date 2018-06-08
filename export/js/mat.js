/**
 * Created by skyvo on 05.06.2016.
 */
// $("#mce-success-response").change(
//     setTimeout(function () {
//         document.write("OK");
//         console.log("OK");
//     }, 500)
// );
// $("#mce-error-response").length.change(
//     setTimeout(function () {
//         document.write("BAD");
//         console.log("BAD");
//     }, 500)
// );
$("#mc-embedded-subscribe").click(function () {
    setTimeout(function () {
    if ($("#mce-success-response")[0].textContent == "Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.") {
        // setTimeout(function () {
        // $("#mce-error-response").style.display = "none";
        // }, 700);

        $("#mce-success-response")[0].textContent = "Мы получили Вашу заявку. Вам на почту отправлено письмо с запросом на подтверждение.";
        console.log($("#mce-success-response")[0].textContent);
    }
    }, 400)


    setTimeout(function () {
    if ($("#mce-error-response")[0].textContent == "Too many subscribe attempts for this email address. Please try again in about 5 minutes. (#6592)") {
        // setTimeout(function () {
        // $("#mce-error-response").style.display = "none";
        // }, 100);

            $("#mce-error-response")[0].textContent = "Извините, Вы отправили слишком много запросов";
            console.log($("#mce-error-response")[0].textContent);
    };
        }, 300)


})