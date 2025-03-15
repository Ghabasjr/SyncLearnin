import {
    fetchFormWrapper
} from "../../src/fetchWrapper/fetchwrapper";
// export const cancelTokenSources: CancelTokenSource[] = [];

export const userService = {



    getAllUsers: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get(`/users/profile/get-users?current_page=${payload?.current_page}&per_page=${payload?.per_page}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    getAllTenders: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/tenders/tenders", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },
    ExcelHistory: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get("/tenders/excel-history?page=1&perpage=", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    updateUser: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/users/profile/edit-user", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    storeDesignation: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/designations/store-designation", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    updateDesignation: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/designations/update-designation", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    updateRoles: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/roles/edit-role", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    deleteRoles: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.delete("/roles/delete-role?role_id=", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    deleteDesignation: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.delete(`/designations/delete-designation?designation_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },


    ListDesignation: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get("/designations/index?page=1&perPage=10", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    importTender: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/tenders/import-tender", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    StoreDepartments: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/departments/store-department", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    StoreRoles: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/roles/store-role", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },
    StoreTeams: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/teams/store-team", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    StoreTeamMember: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/teams/store-team-members", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    updateTeam: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/teams/update-team", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    UpdateDepartments: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/departments/update-department", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    viewTenderDetails: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get(`/tenders/view-tender-details?tender_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    Departments: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get("/departments/index?page=1&perPage=10", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    Roles: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get("/roles/get-roles?page=1&perPage=10", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    Teams: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get("/teams/get-teams?page=1&perPage=10", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    TeamMember: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get(`/teams/get-team-members?id=26&page=1&perPage=10&team_id=17&user_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },


    getDocument: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get(`/tenders/get-document?current_page=${payload.current_page}&per_page=${payload.per_page}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    document: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get("/documents/index?page=1&perPage=10", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },


    storeDocument: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/documents/store-document", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },


    // tenders: async (payload: any) => {
    //   try {
    //     const response = await fetchFormWrapper.post("/tenders/tenders",payload);
    //     return response?.data;
    //   } catch (error) {
    //     throw error;
    //   }
    // },

    UpdateDocument: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/documents/update-document", payload);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    deleteDocument: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.delete(`/documents/delete-document?Document_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    getTeams: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.get(`/teams/get-teams?page=1&perPage=10 ${payload}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    deleteUser: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.delete(`/users/profile/delete-user?user_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    deleteRole: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.delete(`/roles/delete-role?role_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    deleteTeamMember: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.delete(`/teams/delete-team-member?team_id=17&user_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },
    deleteTeam: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.delete(`/teams/delete-team?team_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },

    DeleteDepartments: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.delete(`/departments/delete_department?department_id=${payload?.id}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },
    activateAndDeactivateUser: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post(`/users/profile/user-active-inactive?user_id=${payload.userId}&status=${payload.status}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },
    activateAndDeactivateMember: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post(`/teams/member-active-inactive=${payload.memberId}&status=${payload.status}`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    },
};

export default userService;
