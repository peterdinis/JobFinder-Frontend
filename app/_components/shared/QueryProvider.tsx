"use client"

import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { FC, ReactNode } from "react"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type QueryProviderProps = {
    children?: ReactNode;
}

const queryClient = new QueryClient()


const QueryProvider: FC<QueryProviderProps> = ({
    children
}: QueryProviderProps) => {
    return <QueryClientProvider client={queryClient}>
        {children}7<ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
}

export default QueryProvider