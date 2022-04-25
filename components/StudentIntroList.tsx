import { Card } from './Card'
import { FC, useEffect, useState } from 'react'
import { StudentIntro } from '../models/StudentIntro'
import * as web3 from '@solana/web3.js'

const STUDENT_INTRO_PROGRAM_ID = '6wNDDbfhqyY8Nm8H2dzAPywjt2D7VKfBzKuSjE3pcgVr'

export const StudentIntroList: FC = () => {
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
    const [studentIntros, setStudentIntros] = useState<StudentIntro[]>([])

    useEffect(() => {
        connection.getProgramAccounts(new web3.PublicKey(STUDENT_INTRO_PROGRAM_ID)).then(async (accounts) => {
            const studentIntros: StudentIntro[] = accounts.reduce((accum: StudentIntro[], { pubkey, account }) => {
                const studentIntro = StudentIntro.deserialize(account.data)
                if (!studentIntro) {
                    return accum
                }

                return [...accum, studentIntro]
            }, [])
            setStudentIntros(studentIntros)
        })
    }, [])
    
    return (
        <div>
            {
                studentIntros.map((studentIntro, i) => <Card key={i} studentIntro={studentIntro} /> )
            }
        </div>
    )
}