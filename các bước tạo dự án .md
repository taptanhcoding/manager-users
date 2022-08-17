dùng tổ hợp shift + alt + F để nó căn chỉnh lại code

# 1 : Cài đặt customize-cra github: cài đặt tùy chỉnh react create app => xây dựng sẵn cấu hình webpack cho người dùng =. chạy 1 lệnh ra cả dự án

=> lúc đầu không có nếu muốn custom lại thì chạy lệnh npm eject để nó bung hết ra => lộn xộn
=> dùng customize-cra nó sạch hơn

-   công dụng : tùy biến là các chức năng tạo ra các sửa đổi đối với một đối tượng cấu hình, cho phép người dùng dễ dàng bật hoặc tắt các tính năng của webpack, webpack-dev-server, babel, et al.,.
-   cài đặt: npm i customize-cra react-app-rewired -D => cài vào devDependencies(chỉ cài ở phần phát triển)
-   sử dụng : tại file root (thư mục gốc đấy) - tạo file : config-overrides.js - nội dung : module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return config;
    } - cấu hình lại "script" trong package.json :
    -- "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"

# 2 Cài đặt babel-plugin-module-resolver github: cấu hình lại đường dẫn cho nó ngon lành thôi(kiểu mà ./.././file cần thì nó rối)

-   cài đặt : npm i babel-plugin-module-resolver -D
-   sử dụng: tại file root: - tạo file : .babelrc - nội dung :
    {
    "plugins": [
    ["module-resolver", {
    "root": ["./src"],=> bỏ đi vì đường dẫn không khác gì import thư viện
    "alias": {
    "test": "./test" => cấu hình link ở đây => "~" : "./src" => nó đã thay ./src/file => ~/file
    }
    }]
    ]
    }
    -+ cài đặt auto complete: tự động hoàn thành code khi viết link thay thế ~ ở trên + tạo file jsconfig.json tại root + nội dung :
    {
    "compilerOptions": {
    "baseUrl": ".",
    "paths": {
    "~/_": ["src/_"]
    }
    }
    }
    => cấu hình webpack sẽ không tự nạp các file bable nên ta tùy chỉnh chút:
    cấu hình lại customize-cra tại file config-overrides.js :
    sửa lại thành :
    const { override } = require("customize-cra");

            module.exports = override();

    tìm kiếm gg : customize-cra babel:
    sử lại thành :
    const { override,useBabelRc } = require("customize-cra");

                module.exports = override(
                    useBabelRc() (cái này nhiều khi nó thông báo lỗi tại nó nhận diện hook mà hôok ko cho gọi trong hàm thôi)
                );

# 3 Cài đặt và cấu hình Prettier : là thư viện(của vs code) format lại các file code => dex nhìn hơn

-   cấu hình trong dự án : - tại root :
    -   tạo file : .prettierrc + nội dung : {
        "arrowParens": "always",
        "bracketSameLine": false,
        "bracketSpacing": true,
        "embeddedLanguageFormatting": "auto",
        "htmlWhitespaceSensitivity": "css",
        "insertPragma": false,
        "jsxSingleQuote": false,
        "printWidth": 120,
        "proseWrap": "preserve",
        "quoteProps": "as-needed",
        "requirePragma": false,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 4,
        "trailingComma": "all",
        "useTabs": false,
        "vueIndentScriptAndStyle": false
        }
    -   tạo file : .vscode/settings.json + nội dung : {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
        }

# 4 : cấu hình sử dụng css/scss :

    B1 : tạo GlobalStyles Component : trong src tạo folder components/GlobalStyles => index.js
    B2 : reset css :  npm install normalize.css
        tại GlobalStyles.scss : @import 'normalize.css'; => đây là cách import css trong file css

# 5 : Cấu hình router/layout cho dự án

# 5 xây dựng UI layout

# 6 xây dựng logic layout

(sử dung axios trong này luôn)

# 7 sử dụng thư viện PropStyles
