module.exports = {
    mapUsers: function (rows) {
        const mapped = new Map();
        rows.forEach(row => {
            if (!mapped.has(row.userId)){
                mapped.set(row.userId, {
                    userId: row.userId,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    customers: []
                });
            }
            if (row.customerId){
                mapped.get(row.userId).customers.push({
                    customerId: row.customerId,
                    customerName: row.customerName,
                    role: {
                        roleId: row.roleId,
                        roleName: row.roleName
                    }
                })
            }
        });
        
        return Array.from(mapped.values());
    }
}