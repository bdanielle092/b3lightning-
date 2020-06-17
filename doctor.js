const createDoctor = (name, specialty, address) => {
    const newDoctor = {
        name: name,
        specialty: specialty,
        address: address
    }
    return newDoctor
}

export default createDoctor