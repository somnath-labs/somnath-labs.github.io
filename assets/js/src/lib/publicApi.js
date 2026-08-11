import "./supabase.js";
//#region src/lib/publicApi.ts
var getLocalData = (table) => {
	const data = localStorage.getItem(`demo_${table}`);
	return data ? JSON.parse(data) : [];
};
async function getPublicProfile() {
	{
		const profiles = getLocalData("profiles").filter((p) => p.show_on_website !== false);
		return profiles.length > 0 ? profiles[0] : null;
	}
}
async function getPublicExperiences() {
	return getLocalData("experiences").filter((x) => x.show_on_website !== false).sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime());
}
async function getPublicProjects() {
	return getLocalData("projects").filter((p) => p.show_on_website !== false).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}
async function getPublicSkills() {
	return getLocalData("skills").filter((s) => s.show_on_website !== false).sort((a, b) => (a.order || 0) - (b.order || 0));
}
async function getPublicEducation() {
	return getLocalData("educations").filter((e) => e.show_on_website !== false).sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
}
async function getPublicCertifications() {
	return getLocalData("certifications").filter((c) => c.show_on_website !== false).sort((a, b) => new Date(b.issue_date).getTime() - new Date(a.issue_date).getTime());
}
async function getPublicAwards() {
	return [];
}
async function getPublicLanguages() {
	return [];
}
async function getPublicSocialLinks() {
	{
		const local = localStorage.getItem("demo_social_links");
		if (local) try {
			return JSON.parse(local);
		} catch {
			return [];
		}
		return [];
	}
}
async function getPublicContactInfo() {
	{
		const local = localStorage.getItem("demo_contact_info");
		if (local) try {
			return JSON.parse(local);
		} catch {
			return null;
		}
		return null;
	}
}
//#endregion
export { getPublicAwards, getPublicCertifications, getPublicContactInfo, getPublicEducation, getPublicExperiences, getPublicLanguages, getPublicProfile, getPublicProjects, getPublicSkills, getPublicSocialLinks };
