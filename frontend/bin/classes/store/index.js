/**
 * @module 'CLI/Classes/Store'
 */
const inq = require('inquirer');
const path = require('path');
const fs = require('fs');

class Store {
		/**
	 * @protected
	 * @param {string} name – name of a component
	 * @returns {string} – a template of the component
	 */
	template(name) {
		return `
/**
 * @module 'STORE/${name}'
 */

export const state = () => ({})

export const actions = {}

export const mutations = {}

export const getters = {}
`
	}

	/**
	 * @private
	 * @returns {object} - returns answers of promt
	 */
	prompt() {
		const questions = [
			{
				name: 'name',
				type: 'input',
				message: '👋: Введи название модуля сторы:'
			}
		]
		return inq.prompt(questions)
	}

	async createModule(ctx) {
		this.context = ctx;
		const { name } = await this.prompt();
		const validName = name.replace('-', '_');
		const dest = path.join(this.context, `/store`);
		const askForRewrite = () => (inq.prompt([
					{
						name: 'rewrite',
						type: 'list',
						message: '😺: Кажись, такой модуль уже есть, переписать модуль?',
						choices: [
							{
								value: 'nope'
							},
							{
								value: 'yup'
							}
						]
					}
				]));
		const createFile = () => (
			fs.mkdir(dest, { recursive: true }, (err) => {
				if (!err) {
					fs.writeFile(`${dest}/${validName}.js`, this.template(validName), (e) => {
						if (!e) {
							console.log(`😼: Модуль сторы ${validName} успешно создан!`);
						} else {
							console.log('😿: Oops! Что-то пошло не так', e)
						}
					})
				} else {
					console.log('😿: Oops! Что-то пошло не так', err)
				}
			})
		)
		fs.readFile(`${dest}/${validName}.js`, 'utf-8', async (err, data) => {
			if (!err) {
        if (data) {
					const { rewrite } = await askForRewrite();
					if (rewrite === 'yup') {
						createFile();
					} else {
						console.log('😸: Оке');
						process.exit(1);
					}
				} else {
					createFile();
				}
			} else {
				createFile();
			}
		})
	}
}

module.exports = Store;