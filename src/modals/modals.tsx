export interface IEmail {
    id: number,
    name: string,
    emailAddress: string,
    title: string,
    emailContent: string,
    date: Date,
    type: string,
    isRead: boolean,
    isDeleted: boolean,
}

export interface IFilter {
    name: string,
    options: string[],
}

export interface ICurrentFilters {
    type: string,
    date: string,
}
