import * as FileSystem from 'expo-file-system';



const usersFilePath = FileSystem.documentDirectory + 'users.json';
const proprisFilePath = FileSystem.documentDirectory + 'propris.json';

let users = []; // Lista de usuários
let propris = []; //lista de proprietarios

const loadPropris = async () => {
    try{
        const fileExists = await FileSystem.getInfoAsync(proprisFilePath); // Verifica se o arquivo existe
        if (fileExists.exists) {
            const fileContent = await FileSystem.readAsStringAsync(proprisFilePath);
            propris = JSON.parse(fileContent);
        } else {
            // Se o arquivo não existir, cria um novo
            await FileSystem.writeAsStringAsync(proprisFilePath, '[]');
            propris = []; // Inicializa a lista de propri vazia
        }
    } catch (error) {
        console.error("Erro ao carregar proprietarios:", error);
    }

};

const loadUsers = async () => {
    try {
        const fileExists = await FileSystem.getInfoAsync(usersFilePath);
        if (fileExists.exists) {
            const fileContent = await FileSystem.readAsStringAsync(usersFilePath);
            users = JSON.parse(fileContent);
        } else {
            
            await FileSystem.writeAsStringAsync(usersFilePath, '[]');
            users = []; 
        }
    } catch (error) {
        console.error("Erro ao carregar usuários:", error);
    }
};

loadPropris();

export const cadastrarPropri = async (nome, cpfCnpj, email, senha) => {
    return new Promise(async (resolve, reject) => {
        if (!cpfCnpj || !nome || !email || !senha) {
            reject("O CPF/CPNJ, nome, email e senha são obrigatórios");
        }

        if (propris.some(propri => propri.email === email)) {
            reject("Este email já está cadastrado");
        }

        const newpropris = { cpfCnpj, nome, email, senha };
        propris.push(newpropris);

        await FileSystem.writeAsStringAsync(proprisFilePath, JSON.stringify(propris, null, 2));

        resolve("Proprietário cadastrado com sucesso");
    });

}

export const loginPropri = async (nome, email, senha) => {
    return new Promise((resolve, reject) => {
        const propri = propris.find(propri => propri.nome === nome && propri.email === email && propri.senha === senha);
        if (propri) {
            resolve("Login successful");
        } else {
            reject("Email ou senha incorretos");
        }
    });
};


loadUsers();

export const cadastrarUsuario = async (nome, email, senha) => {
    return new Promise(async (resolve, reject) => {
        if (!nome || !email || !senha) {
            reject("O nome, email e senha são obrigatórios");
        }

        if (users.some(user => user.email === email)) {
            reject("Este email já está cadastrado");
        }

        const newUser = { nome, email, senha };
        users.push(newUser);

        await FileSystem.writeAsStringAsync(usersFilePath, JSON.stringify(users, null, 2));

        resolve("Usuário cadastrado com sucesso");
    });
};

export const loginUser = async (email, senha) => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.email === email && user.senha === senha);
        if (user) {
            resolve("Login successful");
        } else {
            reject("Email ou senha incorretos");
        }
    });

};

const agendamentosFilePath = FileSystem.documentDirectory + 'agendamentos.json';
let agendamentos = [];

const loadAgendamentos = async () => {
    try {
        const fileExists = await FileSystem.getInfoAsync(agendamentosFilePath);
        if (fileExists.exists) {
            const fileContent = await FileSystem.readAsStringAsync(agendamentosFilePath);
            agendamentos = JSON.parse(fileContent);
        } else {
            await FileSystem.writeAsStringAsync(agendamentosFilePath, '[]');
            agendamentos = [];
        }
    } catch (error) {
        console.error("Erro ao carregar agendamentos:", error);
    }
};

loadAgendamentos();

export const salvarAgendamento = async (userId, serviceId, date, time) => {
    const novoAgendamento = { userId, serviceId, date, time };
    agendamentos.push(novoAgendamento);

    try {
        await FileSystem.writeAsStringAsync(agendamentosFilePath, JSON.stringify(agendamentos, null, 2));
        return "Agendamento salvo com sucesso";
    } catch (error) {
        throw new Error("Erro ao salvar agendamento");
    }
};



