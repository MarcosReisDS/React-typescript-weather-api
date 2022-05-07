export function formatDate(weatherAplicableDate: string) {
    const formatedDate = new Date(`${weatherAplicableDate} 21:00`).toDateString().split(' ')

    return `${formatedDate[0]}, ${formatedDate[2]} ${formatedDate[1]}`
}

