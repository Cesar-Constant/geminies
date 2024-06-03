import {CharacterType} from "@/types/character";

export function useConversationInitializer(){
    const initializeCharacter1 = (character1: CharacterType, scenario: string) => {
        return `
            Tu vas incarner un personnage dans cette conversation. Voici ses détails :

            * Nom : ${character1.lastname}
            * Prénom : ${character1.firstname}
            * Âge : ${character1.age}
            * Sexe : ${character1.sex}
            * Métier : ${character1.job}
            * Informations supplémentaires : ${character1.infos}
            
            Incarne ce personnage en tenant compte de tous ces détails (âge, sexe, métier, informations supplémentaires, etc.).
            
            Je vais incarner un autre personnage. Tu devras adapter tes réponses en fonction de mes répliques et du contexte de la conversation.
            
            Commence directement en suivant le scénario : ${scenario}
            
            Consignes importantes :
            
            * Évite les didascalies (descriptions d'actions).
            * Utilise les emojis avec parcimonie.
        `;

    }

    const initializeCharacter2 = (character2: CharacterType, firstMessage: string, scenario: string) => {
        return `
            Tu vas incarner un personnage dans cette conversation. Voici ses détails :

            * Nom : ${character2.lastname}
            * Prénom : ${character2.firstname}
            * Âge : ${character2.age}
            * Sexe : ${character2.sex}
            * Métier : ${character2.job}
            * Informations supplémentaires : ${character2.infos}
            
            Incarne ce personnage en tenant compte de tous ces détails (âge, sexe, métier, informations supplémentaires, etc.).
            
            Voici le scénario dans lequel vous vous trouvez : ${scenario}
            
            Je vais incarner un autre personnage. Tu devras adapter tes réponses en fonction de mes répliques et du contexte de la conversation.
            
            Dès que j'ai terminé ma réplique, réponds directement en incarnant ton personnage.
            
            Commençons. Ma première réplique est : ${firstMessage}
            
            **Consignes importantes :**
            
            * Évite les didascalies (descriptions d'actions).
            * Utilise les emojis avec parcimonie.
        `;

    }

    return {
        initializeCharacter1: (character1: CharacterType, scenario: string) => initializeCharacter1(character1, scenario),
        initializeCharacter2: (character2: CharacterType, firstMessage: string, scenario: string) => initializeCharacter2(character2, firstMessage, scenario)
    }
}