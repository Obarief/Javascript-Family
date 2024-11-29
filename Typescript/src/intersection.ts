// bila menggunakan library (pihak ketiga) dan bila librarynya tidak dapat di ubah nilai di dalamnya/modifikasi maka bisa menggunakan intersection untuk menambah nilainya 

// interface layaknya object
// type layaknya alias

interface HashName{
    name: string
}

interface HashID{
    id: number
}

export type Domain = HashID & HashName