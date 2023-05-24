export type area = {
    area_id: string,
    address: string,
    area_name: string
}

export type article = {
    article_id: string,
    description: string,
    price : {0: {value: number}, 1: {value: number}}
}
export type camera = {
    camera_id: string,
    certificate: string,
    area_name: string
}
// what include to client response
export type importantInfoAboutCar = {
    vin : string,
    driver_license: number,
    mark_and_model: string,
    color: string,
    car_type: string,
    category: string,
    engine_info: string,
    sts_num: string,
    pts_num: string,

    person_name: string,
    surname: string,
    patronymic: string,

    gosnumder: string,
    region_code : string
    
}
export type car_user = {
    
    person_name: string,
    surname: string,
    patronymic: string,

    license_number: string,

}

