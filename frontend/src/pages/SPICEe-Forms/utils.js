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

            const totalAuthorizedEquity = updatedTable.reduce((total, entry) => {
                const authorizedEquity = parseFloat(entry.Total_Authorized_equity) || 0;
                return total + authorizedEquity;
            }, 0);

            const totalSubscribedEquity = updatedTable.reduce((total, entry) => {
                const subscribedEquity = parseFloat(entry.Total_Subscribed_equity) || 0;
                return total + subscribedEquity;
            }, 0);

            // Calculate total_authorized (adding both equity and preference)
            const totalAuthorized = totalAuthorizedEquity + state.step1.base_total_authorized_preference;

            // Calculate total_subscribed (adding both equity and preference subscribed values)
            const totalSubscribed = totalSubscribedEquity + state.step1.base_total_subscribed_preference;

            return {
                ...state,
                step1: {
                    ...state.step1,
                    equity_share_Table: updatedTable,
                    base_total_authorized: totalAuthorizedEquity || 0,
                    base_total_subscribed: totalSubscribedEquity || 0,
                    total_authorized: totalAuthorized,
                    total_classified: totalAuthorized,
                    total_subscribed: totalSubscribed,
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
            const { classIndex: index, field: updateField, value: updateValue } = action.payload;

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

            const totalSubscribedPrefrence = updatedPreferenceTable.reduce((total, entry) => {
                const subscribedPrefrence = parseFloat(entry.Total_Subscribed_prefrence) || 0;
                return total + subscribedPrefrence;
            }, 0);

            // Calculate total_authorized (adding both equity and preference)
            const totalAuthorizedPref = totalAuthorizedPrefrence + state.step1.base_total_authorized;

            // Calculate total_subscribed (adding both equity and preference subscribed values)
            const totalSubscribedPref = totalSubscribedPrefrence + state.step1.base_total_subscribed;

            return {
                ...state,
                step1: {
                    ...state.step1,
                    prefrence_share_Table: updatedPreferenceTable,
                    base_total_authorized_preference: totalAuthorizedPrefrence || 0,
                    base_total_subscribed_preference: totalSubscribedPrefrence || 0,
                    total_authorized: totalAuthorizedPref,
                    total_classified: totalAuthorizedPref,
                    total_subscribed: totalSubscribedPref,
                },
            };

        case "set-total_unclassified":
            return {
                ...state,
                step1: {
                    ...state.step1,
                    total_unclassified: action.payload,
                    // Total unclassified is calculated with Total_Authorized only (equity + preference)
                    total_authorized: Number(state.step1.base_total_authorized) + Number(state.step1.base_total_authorized_preference) + Number(action.payload),
                    // Don't add Total_Subscribed to total_unclassified calculation
                    total_subscribed: state.step1.total_subscribed,  // Keep total_subscribed as it is
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
                        [articleField]: articleValue,
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
            const { companyChoice } = action.payload;
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

        case "set-step-2-fields":
            // console.log("set-step-2-fields:", action.payload);   
            return {
                ...state,
                step2: {
                    ...state.step2,
                    [action.payload.field]: action.payload.value,
                },
            };

        default:
            return state;
    }
}

export const initialState = {
    step1: {
        AOA: { yes: true, no: false },
        Articles_entrenchment: "",
        Details_articles_table: { serialNo: "", articleNumber: "", description: "" },
        company_is: {
            having_share_capital: true,
            having_not_share_capital: false,
        },
        base_total_authorized: 0,
        base_total_authorized_preference: 0,
        base_total_subscribed: 0,
        base_total_subscribed_preference: 0,
        total_authorized: 0,
        total_classified: 0,
        total_subscribed: 0,
        total_unclassified: 0,
        number_classes: 1,
        equity_share_Table: [{
            Class_shares: "",
            Authorized_number_equity: "",
            Subscribed_number_equity: "",
            Total_Authorized_equity: "",
            Authorized_nominal_amount: "",
            Subscribed_nominal_amount: "",
            Total_Subscribed_equity: "",
        }],
        number_classes_prefrence: 1,
        prefrence_share_Table: [{
            Class_shares_prefrence: "",
            Authorized_number_prefrence: "",
            Subscribed_number_prefrence: "",
            Total_Authorized_prefrence: "",
            Authorized_nominal_amount_prefrence: "",
            Subscribed_nominal_amount_prefrence: "",
            Total_Subscribed_prefrence: "",
        }],
    },
    step2: {
        correspondenceAddressLine1: '',
        correspondenceAddressLine2: '',
        pinCode: '',
        areaLocality: '',
        city: '',
        district: '',
        stateUt: '',
        phoneNumber: '',
        mobileNumber: '',
        fax: '',
        email: '',
        isRegisteredOffice: '', // This will hold 'yes' or 'no'
        longitude: '',
        latitude: '',
        officeAddressProof: null,
        utilityBill: null,
        registrarOffice: '',
    },
};
