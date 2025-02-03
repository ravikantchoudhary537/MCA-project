export function reducer(state, action) {
    switch (action.type) {

        case "number-of-classes-equity":
            const numberOfClasses = action.payload;
            const equityShareTable = Array.from({ length: numberOfClasses }, () => ({
                Class_shares: "",
                Authorized_number_equity: "",
                Subscribed_number_equity: "",
                Total_Authorized_equity: "",
                Authorized_nominal_amount: "",
                Subscribed_nominal_amount: "",
                Total_Subscribed_equity: "",
            }));

            return {
                ...state,
                step1: {
                    ...state.step1,
                    number_classes: numberOfClasses,
                    equity_share_Table: equityShareTable,
                },
            };

        case "update-equity-share-table":
            const { classIndex, field, value } = action.payload;

            const updatedTable = state.step1.equity_share_Table.map((entry, index) => {
                if (index === classIndex) {
                    const updatedEntry = { ...entry, [field]: value };

                    if (updatedEntry.Authorized_number_equity && updatedEntry.Authorized_nominal_amount) {
                        updatedEntry.Total_Authorized_equity = (
                            parseFloat(updatedEntry.Authorized_number_equity) * parseFloat(updatedEntry.Authorized_nominal_amount)
                        ).toString();
                    }

                    if (updatedEntry.Subscribed_number_equity && updatedEntry.Subscribed_nominal_amount) {
                        updatedEntry.Total_Subscribed_equity = (
                            parseFloat(updatedEntry.Subscribed_number_equity) * parseFloat(updatedEntry.Subscribed_nominal_amount)
                        ).toString();
                    }

                    return updatedEntry;
                }
                return entry;
            });

            const totalAuthorized = updatedTable.reduce((total, entry) => {
                const authorizedEquity = parseFloat(entry.Total_Authorized_equity) || 0;
                return total + authorizedEquity;
            }, 0);

            const totalSubcribed = updatedTable.reduce((total, entry) => {
                const subscribedEquity = parseFloat(entry.Total_Subscribed_equity) || 0;
                return total + subscribedEquity;
            }, 0);

            return {
                ...state,
                step1: {
                    ...state.step1,
                    equity_share_Table: updatedTable,
                    base_total_authorized: totalAuthorized || 0,
                    total_authorized: totalAuthorized,
                    total_classified: totalAuthorized,
                    total_subscribed: totalSubcribed,

                },
            };

        case "number-of-classes-prefrence":
            const numberOfClassesPrefrence = action.payload;
            const PrefrenceShareTable = Array.from({ length: numberOfClassesPrefrence }, () => ({
                Class_shares_prefrence: "",
                Authorized_number_prefrence: "",
                Subscribed_number_prefrence: "",
                Total_Authorized_prefrence: "",
                Authorized_nominal_amount_prefrence: "",
                Subscribed_nominal_amount_prefrence: "",
                Total_Subscribed_prefrence: "",
            }));

            return {
                ...state,
                step1: {
                    ...state.step1,
                    number_classes_prefrence: numberOfClassesPrefrence,
                    prefrence_share_Table: PrefrenceShareTable,
                },
            };

        case "update-preference-share-table":

            const { classIndex: index, field: updateField, value: updateValue } = action.payload; // Renaming to avoid name clash

            const updatedPreferenceTable = state.step1.prefrence_share_Table.map((entry, idx) => {
                if (idx === index) {
                    const updatedEntry = { ...entry, [updateField]: updateValue };

                    if (updatedEntry.Authorized_number_prefrence && updatedEntry.Authorized_nominal_amount_prefrence) {
                        updatedEntry.Total_Authorized_prefrence = (
                            parseFloat(updatedEntry.Authorized_number_prefrence) * parseFloat(updatedEntry.Authorized_nominal_amount_prefrence)
                        ).toString();
                    }

                    if (updatedEntry.Subscribed_number_prefrence && updatedEntry.Subscribed_nominal_amount_prefrence) {
                        updatedEntry.Total_Subscribed_prefrence = (
                            parseFloat(updatedEntry.Subscribed_number_prefrence) * parseFloat(updatedEntry.Subscribed_nominal_amount_prefrence)
                        ).toString();
                    }

                    return updatedEntry;
                }
                return entry;
            });
            const totalAuthorizedPrefrence = updatedPreferenceTable.reduce((total, entry) => {
                const authorizedPrefrence = parseFloat(entry.Total_Authorized_prefrence) || 0;
                return total + authorizedPrefrence;
            }, 0);

            const totalSubcribedPrefrence = updatedPreferenceTable.reduce((total, entry) => {
                const subscribedPrefrence = parseFloat(entry.Total_Subscribed_prefrence) || 0;
                return total + subscribedPrefrence;
            }, 0);

            return {
                ...state,
                step1: {
                    ...state.step1,
                    prefrence_share_Table: updatedPreferenceTable,
                    base_total_authorized: totalAuthorizedPrefrence || 0,
                    total_authorized: totalAuthorizedPrefrence,
                    total_classified: totalAuthorizedPrefrence,
                    total_subscribed: totalSubcribedPrefrence,
                    // equity_prefrence_total:
                },
            };

        case "set-total_unclassified":
            return {
                ...state,
                step1: {
                    ...state.step1,
                    total_unclassified: action.payload,
                    total_authorized: Number(state.step1.base_total_authorized) + Number(action.payload),
                },
            };

        case "set-total_authorized":
            return {
                ...state,
                step1: {
                    ...state.step1,
                    total_authorized: action.payload,
                },
            };

        case "set-details-articles-table":
            const { field: articleField, value: articleValue } = action.payload;
            return {
                ...state,
                step1: {
                    ...state.step1,
                    Details_articles_table: {
                        ...state.step1.Details_articles_table,
                        [articleField]: articleValue, // Use the renamed variable here
                    },
                },
            };

        case "set-AOA":
            const { choice } = action.payload;
            return {
                ...state,
                step1: {
                    ...state.step1,
                    AOA: {
                        yes: choice === 'yes',
                        no: choice === 'no',
                    },
                },
            };

        case "set-company-is":
            const { companyChoice } = action.payload; // assuming payload contains { companyChoice: 'having_share_capital' | 'having_not_share_capital' }
            return {
                ...state,
                step1: {
                    ...state.step1,
                    company_is: {
                        having_share_capital: companyChoice === 'having_share_capital',
                        having_not_share_capital: companyChoice === 'having_not_share_capital',
                    },
                },
            };

        case "set-step-1-fields":
            return {
                ...state,
                step1: {
                    ...state.step1,
                    [action.payload.field]: action.payload.value,
                },
            };

        default:
            return state;
    }
}

export const initialState = {
    step1: {
        AOA: { yes: true, no: false }, // Default to yes
        Articles_entrenchment: "",
        Details_articles_table: { serialNo: "", articleNumber: "", description: "" },
        company_is: {
            having_share_capital: true, // Default to 'having_share_capital' selected
            having_not_share_capital: false,
        },
        base_total_authorized: 0,
        total_authorized: 0,
        total_classified: 0,
        total_subscribed: 0,
        total_unclassified: 0,

        number_classes: 1,
        equity_share_Table: [1],

        number_classes_prefrence: 1,
        prefrence_share_Table: [1],

    },
    step2: {},
};

// total_authorized = Total_Authorized_equity + Total_Authorized_prefrence
// total_subscribed = Total_Subscribed_equity + Total_Subscribed_prefrence


