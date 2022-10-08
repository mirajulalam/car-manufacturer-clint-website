import { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdmingLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;

        if (email) {
            fetch(`https://car-manufacturer-server-website.vercel.app/admin/${email}`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdmingLoading(false)
                })
        }

    }, [user])
    return [admin, adminLoading]
}

export default useAdmin;