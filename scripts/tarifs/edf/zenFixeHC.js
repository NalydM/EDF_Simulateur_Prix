abonnements.push({
    name: "EDF - Zen Fixe Heures Creuses",
    offer_type: "TRV",
    lastUpdate: "2024-07-01",
    isCommunity: false,
    subscription_url: "https://particulier.edf.fr/fr/accueil/electricite-gaz/offres-electricite/offres-marche/electricite-weekend/zen-fixe.html",
    price_url: "https://particulier.edf.fr/content/dam/2-Actifs/Documents/Offres/Grille-prix-zen-fixe.pdf",
    prices: [
        {
            puissance: 6,
            abonnement: 13.01,
            bleu: {
                prixKwhHP: 22.10,
                prixKwhHC: 17.04
            }
        },
        {
            puissance: 9,
            abonnement: 16.70,
            bleu: {
                prixKwhHP: 22.10,
                prixKwhHC: 17.04
            }
        },
        {
            puissance: 12,
            abonnement: 20.28,
            bleu: {
                prixKwhHP: 18.76,
                prixKwhHC: 14.56
            }
        },
        {
            puissance: 15,
            abonnement: 23.40,
            bleu: {
                prixKwhHP: 22.10,
                prixKwhHC: 17.04
            }
        },
        {
            puissance: 18,
            abonnement: 26.64,
            bleu: {
                prixKwhHP: 22.10,
                prixKwhHC: 17.04
            }
        },
        {
            puissance: 24,
            abonnement: 33.44,
            bleu: {
                prixKwhHP: 22.10,
                prixKwhHC: 17.04
            }
        },
        {
            puissance: 30,
            abonnement: 38.73,
            bleu: {
                prixKwhHP: 22.10,
                prixKwhHC: 17.04
            }
        },
        {
            puissance: 36,
            abonnement: 44.79,
            bleu: {
                prixKwhHP: 22.10,
                prixKwhHC: 17.04
            }
        }],
    hc: [],
    hasHCCustom: true,
    hasSpecialDaysCustom: false,
    specialDays: [],
    getDayType: function (day) {
        let dayType = "bleu";
        return dayType;
    }
});
