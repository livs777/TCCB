import * as FileSystem from 'expo-file-system';



const usersFilePath = FileSystem.documentDirectory + 'users.json';
const agendamentosFilePath = FileSystem.documentDirectory + 'agendamentos.json';

let users = []; // Lista de usuários
let agendamentos = []; // Lista de agendamentos


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



