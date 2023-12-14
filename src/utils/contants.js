export const backDropText = { "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }

export const dropDownData = [1, 2, 3, 4, 5]

export const search = (data, searchText) => {
    const filteredData = data.filter((event) => (
        event?.name?.toLocaleLowerCase()?.includes(searchText.toLocaleLowerCase())
    ))
    return filteredData
}