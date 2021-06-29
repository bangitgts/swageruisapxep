var spec = {
    swagger: "2.0", // Phiên bản Swagger UI
    info: {
        description: "Các thông tin mô tả về dự án và API",
        version: "1.0", // Phiên bản API
        title: "Sắp xếp lịch học",
    },
    host: "45.77.12.16:5000", // Server và port deploy API
    basePath: "/", // Đường dẫn tới API
    tags: [
        // Danh sách các nhóm API: admin, users, images,...
        {
            name: "Account", // Tên nhóm API
            description: "API Về Account Admin", // Mô tả về nhóm API
        },
        {
            name: "Room", // Tên nhóm API
            description: "API FOR ROOM", // Mô tả về nhóm API
        },
        {
            name: "Course", // Tên nhóm API
            description: "API FOR COURSE", // Mô tả về nhóm API
        },
    ],
    schemes: ["http"], // Sử dụng scheme gì? HTTP, HTTPS?
    paths: {
        "/account/login": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Account"],
                summary: "Login lấy token",
                operationId: "gettokenaccountadmin",
                parameters: [{ in: "formData", // Tham số được gửi lên từ form
                        name: "email", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "password", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Loggin successfully",
                    },
                    403: {
                        description: "Loggin failed. Account or password does not match",
                    },
                },
                security: [],
            },
        },

        "/account": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            get: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Account"],
                summary: "Trả về dữ liệu của tài khoản",

                operationId: "",

                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Get all dữ liệu",
                    },
                    500: {
                        description: "Lỗi sever",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },

        "/room": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            get: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Room"],
                summary: "Trả về dữ liệu các phòng học",
                operationId: "",
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Return the rooms",
                    },
                    500: {
                        description: "ERR",
                    },
                }
            },
        },
        "/addroom": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Room"],
                summary: "Add Room",
                operationId: "",
                parameters: [
                    // Các tham số
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "nameRoom", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "capacity", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Successfully added room",
                    },
                    500: {
                        description: "Server Error",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/changenameroom/{id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Room"],
                summary: "Change name room",
                operationId: "changenameroom",
                parameters: [
                    // Các tham số
                    {
                        name: "id",
                        in: "path",
                        required: "true",
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "nameRoom", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Change successful",
                    },
                    500: {
                        description: "No products found",
                    },

                    401: {
                        description: "Chưa đăng nhập",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/changecapacityroom/{id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Room"],
                summary: "Thay đổi sức chứa phòng",
                operationId: "changecapcityRoom",
                parameters: [
                    // Các tham số
                    {
                        name: "id",
                        in: "path",
                        required: "true",
                        type: "string",
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "capacity", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Successfully changed capacity",
                    },
                    402: {
                        description: "No valid room found",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },

        "/addcourse": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Course"],
                summary: "Course",
                operationId: "",
                parameters: [
                    // Các tham số
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "nameCourse", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "schedule", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "during", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "amount", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Create success course",
                    },
                    500: {
                        description: "Server Error",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/changenamecourse/{_id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Course"],
                summary: "Course",
                operationId: "",
                parameters: [
                    // Các tham số
                    { in: "path", // Tham số được gửi lên từ form
                        name: "_id", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "nameCourse", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Create success course",
                    },
                    500: {
                        description: "Server Error",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/changeschedulecourse/{_id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Course"],
                summary: "Course",
                operationId: "",
                parameters: [
                    // Các tham số
                    { in: "path", // Tham số được gửi lên từ form
                        name: "_id", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "schedule", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Successfully changed course time",
                    },
                    500: {
                        description: "No valid courses found",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/changeamountcourse/{_id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            put: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Course"],
                summary: "Course",
                operationId: "",
                parameters: [
                    // Các tham số
                    { in: "path", // Tham số được gửi lên từ form
                        name: "_id", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                    { in: "formData", // Tham số được gửi lên từ form
                        name: "amount", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    },
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Successfully changed course time",
                    },
                    500: {
                        description: "No valid courses found",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/deleteroom/{_id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            delete: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Room"],
                summary: "Room",
                operationId: "",
                parameters: [
                    // Các tham số
                    { in: "path", // Tham số được gửi lên từ form
                        name: "_id", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    }
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Delete thanh cong",
                    },
                    500: {
                        description: "No valid courses found",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
        "/deletecourse/{_id}": {
            // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            delete: {
                // Phương thức gửi request: get, post, put, delete
                tags: ["Course"],
                summary: "Course",
                operationId: "",
                parameters: [
                    // Các tham số
                    { in: "path", // Tham số được gửi lên từ form
                        name: "_id", // Tên tham số
                        required: "true", // Tham số là bắt buộc
                        schema: {
                            type: "string", // Loại dữ liệu của tham số là chuỗi
                        },
                    }
                ],
                produces: ["application/json"], // Loại dữ liệu trả về
                responses: {
                    200: {
                        description: "Delete thanh cong",
                    },
                    500: {
                        description: "No valid courses found",
                    },
                },
                security: [{
                    api_key: [],
                }, ],
            },
        },
    },
    securityDefinitions: {
        // Thông tin về api key sử dụng để thực hiện request
        // api_key: {
        //     type: "apiKey", // Thuộc loại api key xác thực
        //     name: "auth-token", // Tên trường chứa api key xác thực
        //     in: "header", // API key được để trong phần header của request
        // }
        api_key: {
            type: "apiKey",
            name: "auth-token",
            in: "header",
        },
    },
    definitions: {
        // Thông tin các đối tượng sẽ trả về
        account: {
            // Tên đối tượng
            type: "object", // Loại đối tượng là object
            properties: {
                // Các thuộc tính của đối tượng
                id: {
                    // Tên thuộc tính
                    type: "integer", // Loại dữ liệu là số nguyên
                },
                username: {
                    type: "string", // Loại dữ liệu là chuỗi
                },
                password: {
                    type: "string",
                },
            },
        },
    },
};