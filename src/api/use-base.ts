
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import userService from "../../services/Users/userService";

export const useAllUsersQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.getAllUsers(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });

};

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.updateUser(rest))?.data;
        },
    });
};

export const useStoreDepartments = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.StoreDepartments(rest))?.data;
        },
    });
};

export const useStoreDesignation = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.storeDesignation(rest));
        },
    });
};

export const useUpdateDepartments = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.UpdateDepartments(rest))?.data;
        },
    });
};

export const useDeleteDepartments = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.DeleteDepartments(rest))?.data;
        },
    });
};

export const useImportTender = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.importTender(rest))
        },
    });
};

export const useStoreRoles = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.StoreRoles(rest))
        },
    });
};

export const useStoreTeams = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.StoreTeams(rest))
        },
    });
};

export const useStoreTeamMember = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.StoreTeamMember(rest))
        },
    });
};

// export const useTenders = () => {
//   return useMutation({
//     mutationFn: async (data: { _type?: string; [key: string]: any }) => {
//       const { _type, ...rest } = data;
//       return (await userService.tenders(rest))
//     },
//   });
// };

export const useStoreDocument = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.storeDocument(rest))
        },
    });
};


export const useTeamAllMemberQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.TeamMember(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });
};

export const useRolesAllQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.Roles(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });
};


export const useExcelAllHistoryQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.ExcelHistory(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });
};

export const useListAllDesignationQuery = (payload: any) => {
    const queryKey = ["listAllDesignations", payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.ListDesignation(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });
};

export const useTeamsAllQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.Teams(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });
};

export const useDepartmentsAllQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.Departments(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });
};



export const useGetAllDocumentQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.getDocument(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });

};

export const useViewAllTenderDetailsQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.viewTenderDetails(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });

};

export const useAllTenderListQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            page: payload?.page,
            perPage: payload?.perPage,
        };
        return await userService.getAllTenders(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });

};

export const useAllDocumentQuery = (payload: any) => {
    const queryKey = [payload];
    const queryFn = async () => {
        const queryParams = {
            per_page: payload?.per_page,
            current_page: payload?.current_page,
        };
        return await userService.document(queryParams);
    };

    return useQuery({
        queryKey,
        queryFn,
    });

};



// export const useViewAllTenderQuery = (payload: any) => {
//   const queryKey = [payload];
//   const queryFn = async () => {
//     const queryParams = {
//       per_page: payload?.per_page,
//       current_page: payload?.current_page,
//     };
//     return await userService.viewTender(queryParams);
//   };

//   return useQuery({
//     queryKey,
//     queryFn,
//   });

//   };





export const useDeleteUser = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.deleteUser(rest))?.data;
        },
    });
};

export const useDeleteDesignation = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.deleteDesignation(rest));
        },
    });
};

export const useDeleteRoles = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.deleteRoles(rest));
        },
    });
};

export const useDeleteDocument = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.deleteDocument(rest));
        },
    });
};

export const useDeleteTeam = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.deleteTeam(rest));
        },
    });
};
export const useDeleteTeamMember = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.deleteTeamMember(rest));
        },
    });
};


export const useUpdateRoles = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.updateRoles(rest));
        },
    });
};
export const useUpdateDocument = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.UpdateDocument(rest));
        },
    });
};

export const useUpdateTeam = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.updateTeam(rest));
        },
    });
};

export const useUpdateDesignation = () => {
    return useMutation({
        mutationFn: async (data: { _type?: number;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.updateDesignation(rest));
        },
    });
};

export const useActivateAndDeactivate = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.activateAndDeactivateUser(rest))?.data;
        },
    });
};


export const useMemberActivateAndDeactivate = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await userService.activateAndDeactivateMember(rest))?.data;
        },
    });
};
