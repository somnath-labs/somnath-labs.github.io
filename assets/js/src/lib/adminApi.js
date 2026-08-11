import "./supabase.js";
import { fallbackAwards, fallbackCertifications, fallbackEducation, fallbackLanguages, fallbackProfile } from "../pages/public/About.js";
import { cvSkills } from "../pages/public/SkillsSection.js";
import { fallbackExperiences } from "../pages/public/Experience.js";
import { fallbackContactInfo, fallbackSocialLinks } from "../pages/public/Contact.js";
import { fallbackProjects } from "../pages/public/Projects.js";
//#region src/lib/adminApi.ts
var getLocalData = (table) => {
	const data = localStorage.getItem(`demo_${table}`);
	if (data) return JSON.parse(data);
	switch (table) {
		case "profiles": return [fallbackProfile];
		case "educations": return fallbackEducation;
		case "certifications": return fallbackCertifications;
		case "awards": return fallbackAwards;
		case "languages": return fallbackLanguages;
		case "experiences": return fallbackExperiences;
		case "projects": return fallbackProjects;
		case "skills": return cvSkills;
		case "social_links": return fallbackSocialLinks;
		case "contact_info": return [fallbackContactInfo];
		default: return [];
	}
};
var setLocalData = (table, data) => {
	localStorage.setItem(`demo_${table}`, JSON.stringify(data));
};
async function getAll(table, select = "*") {
	return getLocalData(table);
}
async function create(table, data) {
	{
		const localData = getLocalData(table);
		const newItem = {
			...data,
			id: `demo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		setLocalData(table, [newItem, ...localData]);
		return newItem;
	}
}
async function update(table, id, data) {
	{
		const localData = getLocalData(table);
		const index = localData.findIndex((i) => i.id === id);
		if (index === -1) throw new Error("Not found");
		const updatedItem = {
			...localData[index],
			...data,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		localData[index] = updatedItem;
		setLocalData(table, localData);
		return updatedItem;
	}
}
async function remove(table, id) {
	setLocalData(table, getLocalData(table).filter((i) => i.id !== id));
}
async function getSocialLinks() {
	return getAll("social_links");
}
async function createSocialLink(data) {
	return create("social_links", data);
}
async function updateSocialLink(id, data) {
	return update("social_links", id, data);
}
async function deleteSocialLink(id) {
	return remove("social_links", id);
}
async function getContactInfo() {
	{
		const local = localStorage.getItem("demo_contact_info");
		if (local) return JSON.parse(local);
		return fallbackContactInfo;
	}
}
async function updateContactInfo(data) {
	{
		const updated = {
			...await getContactInfo(),
			...data,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		localStorage.setItem("demo_contact_info", JSON.stringify(updated));
		return updated;
	}
}
async function getCertifications() {
	return getAll("certifications");
}
async function createCertification(data) {
	return create("certifications", data);
}
async function updateCertification(id, data) {
	return update("certifications", id, data);
}
async function deleteCertification(id) {
	return remove("certifications", id);
}
async function getAwards() {
	return getAll("awards");
}
async function createAward(data) {
	return create("awards", data);
}
async function updateAward(id, data) {
	return update("awards", id, data);
}
async function deleteAward(id) {
	return remove("awards", id);
}
async function getLanguages() {
	return getAll("languages");
}
async function createLanguage(data) {
	return create("languages", data);
}
async function updateLanguage(id, data) {
	return update("languages", id, data);
}
async function deleteLanguage(id) {
	return remove("languages", id);
}
async function getExperiences() {
	return getAll("experiences");
}
async function createExperience(data) {
	return create("experiences", data);
}
async function updateExperience(id, data) {
	return update("experiences", id, data);
}
async function deleteExperience(id) {
	return remove("experiences", id);
}
async function getProjects() {
	return getAll("projects");
}
async function getProjectBySlug(slug) {
	{
		const found = getLocalData("projects").find((p) => p.slug === slug);
		if (!found) throw new Error("Project not found");
		return found;
	}
}
async function createProject(data) {
	return create("projects", data);
}
async function updateProject(id, data) {
	return update("projects", id, data);
}
async function deleteProject(id) {
	return remove("projects", id);
}
async function getSkills() {
	return getAll("skills");
}
async function createSkill(data) {
	return create("skills", data);
}
async function updateSkill(id, data) {
	return update("skills", id, data);
}
async function deleteSkill(id) {
	return remove("skills", id);
}
async function getSiteSettings() {
	{
		const local = localStorage.getItem("demo_site_settings");
		if (local) return JSON.parse(local);
		return {
			id: "demo-site-settings",
			site_title: "Somnath - Pega Developer & Software Engineer",
			site_description: "Personal professional portfolio showcasing Pega development, Pega Cloud experience, and Agentic AI exploration.",
			contact_heading: "Let's Connect",
			projects_heading: "Things I've Built",
			hero_highlight_1: "Pega Developer",
			hero_highlight_2: "Pega Cloud",
			hero_highlight_3: "Agentic AI",
			hero_highlight_4: "Software Engineering",
			theme: "system",
			created_at: "",
			updated_at: ""
		};
	}
}
async function updateSiteSettings(data) {
	{
		const updated = {
			...await getSiteSettings(),
			...data,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		localStorage.setItem("demo_site_settings", JSON.stringify(updated));
		return updated;
	}
}
async function getDashboardStats() {
	return {
		projects: getLocalData("projects").length,
		experiences: getLocalData("experiences").length,
		skills: getLocalData("skills").length,
		inquiries: getLocalData("inquiries").length
	};
}
//#endregion
export { create, createAward, createCertification, createExperience, createLanguage, createProject, createSkill, createSocialLink, deleteAward, deleteCertification, deleteExperience, deleteLanguage, deleteProject, deleteSkill, deleteSocialLink, getAll, getAwards, getCertifications, getContactInfo, getDashboardStats, getExperiences, getLanguages, getProjectBySlug, getProjects, getSiteSettings, getSkills, getSocialLinks, remove, update, updateAward, updateCertification, updateContactInfo, updateExperience, updateLanguage, updateProject, updateSiteSettings, updateSkill, updateSocialLink };
