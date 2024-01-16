export const backDropText = { "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }

export const dropDownData = [1, 2, 3, 4, 5]
export const weightDropDownData = [8, 15]

export const search = (data, searchText) => {
    const filteredData = data.filter((event) => (
        event?.name?.toLocaleLowerCase()?.includes(searchText.toLocaleLowerCase())
    ))
    return filteredData
}

export const searchUser = (data, searchText) => {
    const filteredData = data.filter((event) => (
        (event?.leader?.toLocaleLowerCase()?.includes(searchText?.toLocaleLowerCase()) || event?.name?.toLocaleLowerCase()?.includes(searchText?.toLocaleLowerCase()) || event.phone?.toString()?.includes(searchText) || event?.applicantId?.toLocaleLowerCase()?.includes(searchText))
    ))
    return filteredData
}