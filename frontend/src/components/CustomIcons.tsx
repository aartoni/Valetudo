
// Taken from https://github.com/Templarian/MaterialDesign/blob/master/svg/fan.svg
import {createSvgIcon} from "@mui/material";
import React from "react";

export const FanSpeedIcon = createSvgIcon(
    <path d="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z" />,
    "fanSpeed"
);

// Extracted from https://github.com/mqtt/mqttorg-graphics/blob/master/svg/mqtt-icon-solid.svg
export const MQTTIcon = createSvgIcon(
    <path
        d="M 20.094475,4.0709382 C 21.1373,5.1065709 22.151358,6.3507683 23,7.5086631 V 2.1003596 C 23,1.4962406 22.510951,1 21.89964,1 h -5.559333 c 1.294541,0.9061785 2.603466,1.9274273 3.754168,3.0709382 z M 22.992809,21.892448 V 14.405689 C 20.49003,8.1990848 15.398169,3.287022 9.0477281,1 H 2.1003596 C 1.4962406,1 1,1.4890487 1,2.1003596 V 3.1791435 C 11.974829,3.2438703 20.892776,12.097091 20.964695,23 h 0.934945 c 0.604119,-0.0072 1.093169,-0.496241 1.093169,-1.107552 z M 1,6.5377575 V 10.11932 C 8.1199739,10.184046 13.902256,15.923178 13.974175,23 h 3.718208 C 17.620464,13.909448 10.162471,6.5449494 1,6.5377575 Z M 1,13.477934 V 21.89964 C 1,22.503759 1.4890487,23 2.1003596,23 H 10.701864 C 10.629945,17.735535 6.3076169,13.485126 1,13.477934 Z"
    />,
    "mqtt"
);

// Extracted from https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg
export const SwaggerUIIcon = createSvgIcon(
    <path
        d="m12.001 1c-6.065 0-11.001 4.935-11.001 11.001s4.935 10.999 11.001 10.999 10.999-4.933 10.999-10.999-4.934-11.001-10.999-11.001zm0 1.048c5.496 0 9.951 4.456 9.951 9.952s-4.455 9.951-9.951 9.951-9.952-4.455-9.952-9.951 4.456-9.952 9.952-9.952zm-3.326 4.331c-.133-.001-.261-.001-.388.006-.9.05-1.443.474-1.591 1.349-.106.609-.087 1.235-.13 1.848-.012.322-.046.639-.106.952-.122.558-.363.731-.93.761-.076.008-.148.021-.224.038v1.341c1.032.051 1.172.415 1.256 1.494.03.393-.013.787.012 1.18.016.372.067.741.144 1.101.237.985 1.198 1.315 2.361 1.117v-1.178c-.186 0-.35.004-.511 0-.394-.012-.542-.111-.58-.491-.051-.491-.039-.99-.069-1.485-.059-.918-.161-1.823-1.057-2.407.461-.338.795-.744.901-1.282.076-.376.123-.751.153-1.132.025-.381-.022-.771.012-1.147h.001c.056-.609.094-.858.826-.833.11 0 .215-.017.338-.025v-1.202c-.146 0-.283-.003-.416-.006zm6.958.008c-.231-.007-.48.012-.745.056v1.166c.224 0 .397.001.57.006.3.004.53.117.559.452.03.304.03.613.059.922.059.614.093 1.235.199 1.84.093.499.436.871.863 1.176-.748.503-.969 1.222-1.007 2.03-.021.554-.034 1.112-.063 1.671-.025.508-.203.673-.715.686-.144.004-.283.017-.444.025v1.197c.3 0 .576.017.851 0 .855-.051 1.37-.466 1.539-1.295.072-.457.115-.919.128-1.38.03-.423.026-.849.069-1.268.063-.656.362-.926 1.018-.969.063-.008.124-.021.183-.042v-1.342c-.11-.013-.187-.025-.267-.03v.001c-.491-.021-.736-.187-.859-.652-.076-.296-.123-.605-.139-.91-.034-.567-.03-1.137-.069-1.704-.072-1.093-.728-1.608-1.729-1.637zm-.931 4.839v.001c-.432-.008-.791.333-.804.765 0 .432.348.779.779.779h.008c.389.068.783-.309.808-.762.021-.419-.359-.783-.79-.783zm-5.384.001c-.423-.021-.787.308-.808.731-.021.427.308.791.731.812h.051c.419.025.778-.295.804-.714v-.043c.008-.427-.333-.778-.761-.787zm2.669 0c-.41-.013-.752.308-.765.714 0 .025 0 .047.004.072 0 .461.313.757.787.757.465 0 .757-.304.757-.783-.004-.461-.313-.765-.783-.761z"/>,
    "swagger"
);


export const ValetudoMonochromeIcon = createSvgIcon(
    <path d="m11.772 10.612c-0.39621-0.044842-0.80126-0.20808-1.1302-0.45549-0.12512-0.094101-0.3544-0.32369-0.44613-0.44668-0.21508-0.28848-0.37056-0.64427-0.43372-0.99249-0.027319-0.15062-0.037464-0.52655-0.018386-0.68126 0.083954-0.68078 0.45165-1.2799 1.0145-1.653 0.28478-0.18879 0.56805-0.30096 0.91199-0.36115 0.1673-0.029278 0.48364-0.029311 0.65999-7.21e-5 1.0035 0.16637 1.7715 0.95269 1.9194 1.9651 0.02365 0.16191 0.0239 0.48031 5.04e-4 0.6449-0.09423 0.66295-0.4584 1.2399-1.0194 1.6149-0.4216 0.28188-0.97374 0.42019-1.4585 0.36532zm-0.048 3.8256c-0.85883-0.39122-1.7796-0.9165-2.5425-1.4505-1.0606-0.74231-1.844-1.4955-2.362-2.271-0.51115-0.76521-0.75119-1.5519-0.71771-2.352 0.038268-0.91475 0.23153-1.6781 0.62435-2.466 0.19975-0.40065 0.40113-0.71728 0.6707-1.0545 0.95968-1.2007 2.3507-1.9824 3.8654-2.1721 0.42566-0.053324 1.0054-0.056553 1.4144-0.00788 1.8091 0.21532 3.3864 1.2231 4.3488 2.7785 0.13727 0.22186 0.36259 0.67111 0.45743 0.91199 0.25497 0.64766 0.38656 1.287 0.41616 2.022 0.06007 1.4913-0.84335 2.9431-2.6947 4.3305-0.67759 0.50779-1.3659 0.93873-2.2019 1.3785-0.33705 0.17732-0.96287 0.46958-1.002 0.46852-0.0088-2.41e-4 -0.13412-0.05144-0.27602-0.11608zm0.498-2.1567c0.75059-0.39986 1.474-0.86882 2.0506-1.3293 0.95202-0.76031 1.5252-1.513 1.646-2.1616 0.02793-0.14995 0.01849-0.57664-0.01805-0.81599-0.17428-1.1414-0.78609-2.1045-1.7411-2.7405-0.49092-0.32702-1.0534-0.5357-1.6735-0.62085-0.21805-0.02994-0.75285-0.030271-0.96599-6.001e-4 -0.4912 0.068378-0.85598 0.18028-1.284 0.39388-1.0976 0.54779-1.8822 1.5928-2.1113 2.8123-0.060842 0.3239-0.08015 0.77565-0.041869 0.97967 0.19443 1.0362 1.5659 2.3341 3.659 3.4624 0.13848 0.07466 0.25456 0.13574 0.258 0.13574 0.0034-7e-6 0.10342-0.05179 0.22222-0.11508zm-0.97391 9.9388c-0.73343-1.1666-0.83404-1.3177-1.0339-1.5524-0.13074-0.15353-0.56522-0.58787-0.75218-0.75196-0.75678-0.66414-1.5237-1.2173-3.0213-2.179-0.60134-0.38616-1.2736-0.88593-1.8086-1.3446-0.4013-0.34401-1.0106-0.93493-1.3446-1.304-2.161-2.388-3.2863-5.2024-3.2872-8.2214-4.8e-4 -1.7257 0.36043-3.4053 1.0697-4.9761 0.22712-0.50304 0.66515-1.31 0.7001-1.2897 0.17462 0.10134 2.8493 1.7409 2.8495 1.7469 2.881e-4 0.00463-0.050997 0.098375-0.11397 0.20829-0.95308 1.6636-1.3263 3.6163-1.0549 5.5185 0.33895 2.3747 1.738 4.5636 4.0072 6.2695 0.32616 0.24518 0.54381 0.39523 0.97163 0.66991 0.89913 0.57722 1.4163 0.93107 2.0464 1.4002 0.56392 0.41985 0.92313 0.71539 1.4607 1.2017l0.0633 0.05872 0.0458-0.04142c1.1111-1.0048 1.9117-1.5832 3.6055-2.6707 1.8769-1.2053 3.2568-2.6661 4.0886-4.3288 0.71978-1.4387 1.0115-3.0017 0.85754-4.5948-0.12008-1.2426-0.49332-2.4187-1.1085-3.4929-0.059793-0.10441-0.10849-0.19359-0.10821-0.19818 2.4e-4 -0.00459 0.10693-0.072753 0.237-0.15148 0.27595-0.16701 2.5646-1.5643 2.6016-1.5883 0.02382-0.015494 0.02952-0.008504 0.12196 0.14896 1.0943 1.8643 1.6595 3.9482 1.6589 6.1166-7.21e-4 2.8817-1.0432 5.6109-3.023 7.9146-0.4152 0.48312-0.98522 1.0583-1.4709 1.4842-0.65575 0.57499-1.277 1.0359-2.1659 1.6067-1.9557 1.2559-3.1241 2.2012-3.7514 3.0353-0.05219 0.06936-0.42873 0.65714-0.83678 1.3062-0.40804 0.64903-0.74639 1.1801-0.75189 1.1801-0.0055 0-0.34384-0.53102-0.75189-1.1801z" strokeWidth=".24"/>,
    "valetudo"
);
