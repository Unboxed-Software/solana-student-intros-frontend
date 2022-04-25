import { FC } from 'react'
import { StudentIntro } from '../models/StudentIntro'
import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from '@chakra-ui/react'
import * as web3 from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const STUDENT_INTRO_PROGRAM_ID = '6wNDDbfhqyY8Nm8H2dzAPywjt2D7VKfBzKuSjE3pcgVr'

export const Form: FC = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const studentIntro = new StudentIntro(name, message)
        handleTransactionSubmit(studentIntro)
    }

    const handleTransactionSubmit = async (studentIntro: StudentIntro) => {
        console.log(JSON.stringify(studentIntro))
    }

    return (
        <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={1}
            margin={2}
            justifyContent="center"
        >
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        What do we call you?
                    </FormLabel>
                    <Input 
                    id='name' 
                    color='gray.400'
                    onChange={event => setName(event.currentTarget.value)}
                />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        What brings you to Solana, friend?
                    </FormLabel>
                    <Textarea 
                        id='message' 
                        color='gray.400'
                        onChange={event => setMessage(event.currentTarget.value)}
                    />
                </FormControl>
                <Button width="full" mt={4} type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    );
}