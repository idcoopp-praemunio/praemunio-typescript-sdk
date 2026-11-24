import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AuthAuthTokenPostRequest } from '../models/AuthAuthTokenPostRequest';
import { DocumentsArchivePostRequest } from '../models/DocumentsArchivePostRequest';
import { DocumentsDeleteDeleteRequest } from '../models/DocumentsDeleteDeleteRequest';
import { DocumentsMovePostRequest } from '../models/DocumentsMovePostRequest';
import { DocumentsRestorePostRequest } from '../models/DocumentsRestorePostRequest';
import { DocumentsUpdatePutRequest } from '../models/DocumentsUpdatePutRequest';
import { FoldersCreatePostRequest } from '../models/FoldersCreatePostRequest';
import { FoldersDeleteDeleteRequest } from '../models/FoldersDeleteDeleteRequest';
import { FoldersUpdatePutRequest } from '../models/FoldersUpdatePutRequest';
import { TeamsCreatePostRequest } from '../models/TeamsCreatePostRequest';
import { TeamsDeleteDeleteRequest } from '../models/TeamsDeleteDeleteRequest';
import { TeamsMembersAddPostRequest } from '../models/TeamsMembersAddPostRequest';
import { TeamsUpdatePutRequest } from '../models/TeamsUpdatePutRequest';
import { WorkspacesCreatePostRequest } from '../models/WorkspacesCreatePostRequest';
import { WorkspacesDeleteDeleteRequest } from '../models/WorkspacesDeleteDeleteRequest';
import { WorkspacesUpdatePutRequest } from '../models/WorkspacesUpdatePutRequest';

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiAuthAuthTokenPostRequest {
    /**
     * 
     * @type AuthAuthTokenPostRequest
     * @memberof AuthenticationApiauthAuthTokenPost
     */
    auth_auth_token_post_request: AuthAuthTokenPostRequest
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * API KEY Authentification
     * @param param the request object
     */
    public authenticateWithHttpInfo(param: AuthenticationApiAuthAuthTokenPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.authenticateWithHttpInfo(param.auth_auth_token_post_request,  options).toPromise();
    }

    /**
     * 
     * API KEY Authentification
     * @param param the request object
     */
    public authenticate(param: AuthenticationApiAuthAuthTokenPostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.authenticate(param.auth_auth_token_post_request,  options).toPromise();
    }

}

import { ObservableDocumentsApi } from "./ObservableAPI";
import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";

export interface DocumentsApiDocumentsArchivePostRequest {
    /**
     * 
     * @type DocumentsArchivePostRequest
     * @memberof DocumentsApidocumentsArchivePost
     */
    documents_archive_post_request: DocumentsArchivePostRequest
}

export interface DocumentsApiDocumentsDeleteDeleteRequest {
    /**
     * 
     * @type DocumentsDeleteDeleteRequest
     * @memberof DocumentsApidocumentsDeleteDelete
     */
    documents_delete_delete_request: DocumentsDeleteDeleteRequest
}

export interface DocumentsApiDocumentsDetailsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentsDetailsGet
     */
    document_id?: string
}

export interface DocumentsApiDocumentsDocumentsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentsDocumentsGet
     */
    workspace_id?: string
}

export interface DocumentsApiDocumentsMovePostRequest {
    /**
     * 
     * @type DocumentsMovePostRequest
     * @memberof DocumentsApidocumentsMovePost
     */
    documents_move_post_request: DocumentsMovePostRequest
}

export interface DocumentsApiDocumentsRestorePostRequest {
    /**
     * 
     * @type DocumentsRestorePostRequest
     * @memberof DocumentsApidocumentsRestorePost
     */
    documents_restore_post_request: DocumentsRestorePostRequest
}

export interface DocumentsApiDocumentsStreamGetRequest {
    /**
     * 
     * @type any
     * @memberof DocumentsApidocumentsStreamGet
     */
    body: any
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentsStreamGet
     */
    document_id?: string
}

export interface DocumentsApiDocumentsUpdatePutRequest {
    /**
     * 
     * @type DocumentsUpdatePutRequest
     * @memberof DocumentsApidocumentsUpdatePut
     */
    documents_update_put_request: DocumentsUpdatePutRequest
}

export interface DocumentsApiDocumentsUploadPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentsUploadPost
     */
    workspace_id?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentsUploadPost
     */
    folder_id?: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DocumentsApidocumentsUploadPost
     */
    file1?: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DocumentsApidocumentsUploadPost
     */
    file2?: HttpFile
}

export class ObjectDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentsApiRequestFactory, responseProcessor?: DocumentsApiResponseProcessor) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Archive Document
     * @param param the request object
     */
    public archiveWithHttpInfo(param: DocumentsApiDocumentsArchivePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.archiveWithHttpInfo(param.documents_archive_post_request,  options).toPromise();
    }

    /**
     * 
     * Archive Document
     * @param param the request object
     */
    public archive(param: DocumentsApiDocumentsArchivePostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.archive(param.documents_archive_post_request,  options).toPromise();
    }

    /**
     * 
     * Delete Document
     * @param param the request object
     */
    public deleteWithHttpInfo(param: DocumentsApiDocumentsDeleteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deleteWithHttpInfo(param.documents_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Delete Document
     * @param param the request object
     */
    public delete(param: DocumentsApiDocumentsDeleteDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.delete(param.documents_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Get Document Info
     * @param param the request object
     */
    public getWithHttpInfo(param: DocumentsApiDocumentsDetailsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getWithHttpInfo(param.document_id,  options).toPromise();
    }

    /**
     * 
     * Get Document Info
     * @param param the request object
     */
    public get(param: DocumentsApiDocumentsDetailsGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.get(param.document_id,  options).toPromise();
    }

    /**
     * 
     * Get Document By Workspace
     * @param param the request object
     */
    public listWithHttpInfo(param: DocumentsApiDocumentsDocumentsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.listWithHttpInfo(param.workspace_id,  options).toPromise();
    }

    /**
     * 
     * Get Document By Workspace
     * @param param the request object
     */
    public list(param: DocumentsApiDocumentsDocumentsGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.list(param.workspace_id,  options).toPromise();
    }

    /**
     * 
     * Move Document
     * @param param the request object
     */
    public moveWithHttpInfo(param: DocumentsApiDocumentsMovePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.moveWithHttpInfo(param.documents_move_post_request,  options).toPromise();
    }

    /**
     * 
     * Move Document
     * @param param the request object
     */
    public move(param: DocumentsApiDocumentsMovePostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.move(param.documents_move_post_request,  options).toPromise();
    }

    /**
     * 
     * Restore Document 
     * @param param the request object
     */
    public restoreWithHttpInfo(param: DocumentsApiDocumentsRestorePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.restoreWithHttpInfo(param.documents_restore_post_request,  options).toPromise();
    }

    /**
     * 
     * Restore Document 
     * @param param the request object
     */
    public restore(param: DocumentsApiDocumentsRestorePostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.restore(param.documents_restore_post_request,  options).toPromise();
    }

    /**
     * 
     * Stream Document Copy
     * @param param the request object
     */
    public streamWithHttpInfo(param: DocumentsApiDocumentsStreamGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.streamWithHttpInfo(param.body, param.document_id,  options).toPromise();
    }

    /**
     * 
     * Stream Document Copy
     * @param param the request object
     */
    public stream(param: DocumentsApiDocumentsStreamGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.stream(param.body, param.document_id,  options).toPromise();
    }

    /**
     * 
     * Update Document
     * @param param the request object
     */
    public updateWithHttpInfo(param: DocumentsApiDocumentsUpdatePutRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.updateWithHttpInfo(param.documents_update_put_request,  options).toPromise();
    }

    /**
     * 
     * Update Document
     * @param param the request object
     */
    public update(param: DocumentsApiDocumentsUpdatePutRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.update(param.documents_update_put_request,  options).toPromise();
    }

    /**
     * 
     * Upload Document 
     * @param param the request object
     */
    public uploadWithHttpInfo(param: DocumentsApiDocumentsUploadPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.uploadWithHttpInfo(param.workspace_id, param.folder_id, param.file1, param.file2,  options).toPromise();
    }

    /**
     * 
     * Upload Document 
     * @param param the request object
     */
    public upload(param: DocumentsApiDocumentsUploadPostRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.upload(param.workspace_id, param.folder_id, param.file1, param.file2,  options).toPromise();
    }

}

import { ObservableFoldersApi } from "./ObservableAPI";
import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";

export interface FoldersApiFoldersContentGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FoldersApifoldersContentGet
     */
    folder_id?: Array<string>
}

export interface FoldersApiFoldersCreatePostRequest {
    /**
     * 
     * @type FoldersCreatePostRequest
     * @memberof FoldersApifoldersCreatePost
     */
    folders_create_post_request: FoldersCreatePostRequest
}

export interface FoldersApiFoldersDeleteDeleteRequest {
    /**
     * 
     * @type FoldersDeleteDeleteRequest
     * @memberof FoldersApifoldersDeleteDelete
     */
    folders_delete_delete_request: FoldersDeleteDeleteRequest
}

export interface FoldersApiFoldersDetailsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApifoldersDetailsGet
     */
    folder_id?: string
}

export interface FoldersApiFoldersGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApifoldersGet
     */
    workspace_id: string
}

export interface FoldersApiFoldersMovePostRequest {
    /**
     * 
     * @type FoldersDeleteDeleteRequest
     * @memberof FoldersApifoldersMovePost
     */
    folders_delete_delete_request: FoldersDeleteDeleteRequest
}

export interface FoldersApiFoldersUpdatePutRequest {
    /**
     * 
     * @type FoldersUpdatePutRequest
     * @memberof FoldersApifoldersUpdatePut
     */
    folders_update_put_request: FoldersUpdatePutRequest
}

export class ObjectFoldersApi {
    private api: ObservableFoldersApi

    public constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Get Folder Content
     * @param param the request object
     */
    public contentWithHttpInfo(param: FoldersApiFoldersContentGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.contentWithHttpInfo(param.folder_id,  options).toPromise();
    }

    /**
     * 
     * Get Folder Content
     * @param param the request object
     */
    public content(param: FoldersApiFoldersContentGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.content(param.folder_id,  options).toPromise();
    }

    /**
     * 
     * Create Folder
     * @param param the request object
     */
    public createWithHttpInfo(param: FoldersApiFoldersCreatePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.createWithHttpInfo(param.folders_create_post_request,  options).toPromise();
    }

    /**
     * 
     * Create Folder
     * @param param the request object
     */
    public create(param: FoldersApiFoldersCreatePostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.create(param.folders_create_post_request,  options).toPromise();
    }

    /**
     * 
     * Delete Folder
     * @param param the request object
     */
    public deleteWithHttpInfo(param: FoldersApiFoldersDeleteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deleteWithHttpInfo(param.folders_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Delete Folder
     * @param param the request object
     */
    public delete(param: FoldersApiFoldersDeleteDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.delete(param.folders_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Get Folder Details
     * @param param the request object
     */
    public getWithHttpInfo(param: FoldersApiFoldersDetailsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getWithHttpInfo(param.folder_id,  options).toPromise();
    }

    /**
     * 
     * Get Folder Details
     * @param param the request object
     */
    public get(param: FoldersApiFoldersDetailsGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.get(param.folder_id,  options).toPromise();
    }

    /**
     * 
     * Get Folders 
     * @param param the request object
     */
    public listWithHttpInfo(param: FoldersApiFoldersGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.listWithHttpInfo(param.workspace_id,  options).toPromise();
    }

    /**
     * 
     * Get Folders 
     * @param param the request object
     */
    public list(param: FoldersApiFoldersGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.list(param.workspace_id,  options).toPromise();
    }

    /**
     * 
     * Move Folder
     * @param param the request object
     */
    public moveWithHttpInfo(param: FoldersApiFoldersMovePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.moveWithHttpInfo(param.folders_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Move Folder
     * @param param the request object
     */
    public move(param: FoldersApiFoldersMovePostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.move(param.folders_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Update Folder
     * @param param the request object
     */
    public updateWithHttpInfo(param: FoldersApiFoldersUpdatePutRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.updateWithHttpInfo(param.folders_update_put_request,  options).toPromise();
    }

    /**
     * 
     * Update Folder
     * @param param the request object
     */
    public update(param: FoldersApiFoldersUpdatePutRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.update(param.folders_update_put_request,  options).toPromise();
    }

}

import { ObservableTeamsApi } from "./ObservableAPI";
import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";

export interface TeamsApiTeamsCreatePostRequest {
    /**
     * 
     * @type TeamsCreatePostRequest
     * @memberof TeamsApiteamsCreatePost
     */
    teams_create_post_request: TeamsCreatePostRequest
}

export interface TeamsApiTeamsDashboardGetRequest {
}

export interface TeamsApiTeamsDeleteDeleteRequest {
    /**
     * 
     * @type TeamsDeleteDeleteRequest
     * @memberof TeamsApiteamsDeleteDelete
     */
    teams_delete_delete_request: TeamsDeleteDeleteRequest
}

export interface TeamsApiTeamsGetRequest {
}

export interface TeamsApiTeamsInfoGetRequest {
    /**
     * 
     * @type any
     * @memberof TeamsApiteamsInfoGet
     */
    body: any
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TeamsApiteamsInfoGet
     */
    team_id?: Array<string>
}

export interface TeamsApiTeamsLogsGetRequest {
    /**
     * team Id
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TeamsApiteamsLogsGet
     */
    team_id?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TeamsApiteamsLogsGet
     */
    page?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TeamsApiteamsLogsGet
     */
    limit?: string
}

export interface TeamsApiTeamsUpdatePutRequest {
    /**
     * 
     * @type TeamsUpdatePutRequest
     * @memberof TeamsApiteamsUpdatePut
     */
    teams_update_put_request: TeamsUpdatePutRequest
}

export interface TeamsApiTeamsWorkspacesGetRequest {
    /**
     * team Id
     * Defaults to: undefined
     * @type string
     * @memberof TeamsApiteamsWorkspacesGet
     */
    team_id?: string
}

export class ObjectTeamsApi {
    private api: ObservableTeamsApi

    public constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Create Team
     * @param param the request object
     */
    public createWithHttpInfo(param: TeamsApiTeamsCreatePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.createWithHttpInfo(param.teams_create_post_request,  options).toPromise();
    }

    /**
     * 
     * Create Team
     * @param param the request object
     */
    public create(param: TeamsApiTeamsCreatePostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.create(param.teams_create_post_request,  options).toPromise();
    }

    /**
     * 
     * Get Team Data
     * @param param the request object
     */
    public dashboardWithHttpInfo(param: TeamsApiTeamsDashboardGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.dashboardWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * Get Team Data
     * @param param the request object
     */
    public dashboard(param: TeamsApiTeamsDashboardGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.dashboard( options).toPromise();
    }

    /**
     * 
     * Delete Team
     * @param param the request object
     */
    public deleteWithHttpInfo(param: TeamsApiTeamsDeleteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deleteWithHttpInfo(param.teams_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Delete Team
     * @param param the request object
     */
    public delete(param: TeamsApiTeamsDeleteDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.delete(param.teams_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Get Account Teams
     * @param param the request object
     */
    public listWithHttpInfo(param: TeamsApiTeamsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.listWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * Get Account Teams
     * @param param the request object
     */
    public list(param: TeamsApiTeamsGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.list( options).toPromise();
    }

    /**
     * 
     * Get Team Details
     * @param param the request object
     */
    public getWithHttpInfo(param: TeamsApiTeamsInfoGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getWithHttpInfo(param.body, param.team_id,  options).toPromise();
    }

    /**
     * 
     * Get Team Details
     * @param param the request object
     */
    public get(param: TeamsApiTeamsInfoGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.get(param.body, param.team_id,  options).toPromise();
    }

    /**
     * 
     * Get Team logs
     * @param param the request object
     */
    public logsWithHttpInfo(param: TeamsApiTeamsLogsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.logsWithHttpInfo(param.team_id, param.page, param.limit,  options).toPromise();
    }

    /**
     * 
     * Get Team logs
     * @param param the request object
     */
    public logs(param: TeamsApiTeamsLogsGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.logs(param.team_id, param.page, param.limit,  options).toPromise();
    }

    /**
     * 
     * Update Team Data
     * @param param the request object
     */
    public updateWithHttpInfo(param: TeamsApiTeamsUpdatePutRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.updateWithHttpInfo(param.teams_update_put_request,  options).toPromise();
    }

    /**
     * 
     * Update Team Data
     * @param param the request object
     */
    public update(param: TeamsApiTeamsUpdatePutRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.update(param.teams_update_put_request,  options).toPromise();
    }

    /**
     * 
     * Get Team workspaces
     * @param param the request object
     */
    public workspacesWithHttpInfo(param: TeamsApiTeamsWorkspacesGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.workspacesWithHttpInfo(param.team_id,  options).toPromise();
    }

    /**
     * 
     * Get Team workspaces
     * @param param the request object
     */
    public workspaces(param: TeamsApiTeamsWorkspacesGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.workspaces(param.team_id,  options).toPromise();
    }

}

import { ObservableTeamsMembersApi } from "./ObservableAPI";
import { TeamsMembersApiRequestFactory, TeamsMembersApiResponseProcessor} from "../apis/TeamsMembersApi";

export interface TeamsMembersApiTeamsMembersAddPostRequest {
    /**
     * 
     * @type TeamsMembersAddPostRequest
     * @memberof TeamsMembersApiteamsMembersAddPost
     */
    teams_members_add_post_request: TeamsMembersAddPostRequest
}

export interface TeamsMembersApiTeamsMembersGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TeamsMembersApiteamsMembersGet
     */
    team_id?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamsMembersApiteamsMembersGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamsMembersApiteamsMembersGet
     */
    limit?: number
}

export class ObjectTeamsMembersApi {
    private api: ObservableTeamsMembersApi

    public constructor(configuration: Configuration, requestFactory?: TeamsMembersApiRequestFactory, responseProcessor?: TeamsMembersApiResponseProcessor) {
        this.api = new ObservableTeamsMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Add Team Member Copy
     * @param param the request object
     */
    public addWithHttpInfo(param: TeamsMembersApiTeamsMembersAddPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.addWithHttpInfo(param.teams_members_add_post_request,  options).toPromise();
    }

    /**
     * 
     * Add Team Member Copy
     * @param param the request object
     */
    public add(param: TeamsMembersApiTeamsMembersAddPostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.add(param.teams_members_add_post_request,  options).toPromise();
    }

    /**
     * 
     * Get Team Members
     * @param param the request object
     */
    public listWithHttpInfo(param: TeamsMembersApiTeamsMembersGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.listWithHttpInfo(param.team_id, param.page, param.limit,  options).toPromise();
    }

    /**
     * 
     * Get Team Members
     * @param param the request object
     */
    public list(param: TeamsMembersApiTeamsMembersGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.list(param.team_id, param.page, param.limit,  options).toPromise();
    }

}

import { ObservableWorkspacesApi } from "./ObservableAPI";
import { WorkspacesApiRequestFactory, WorkspacesApiResponseProcessor} from "../apis/WorkspacesApi";

export interface WorkspacesApiWorkspacesCreatePostRequest {
    /**
     * 
     * @type WorkspacesCreatePostRequest
     * @memberof WorkspacesApiworkspacesCreatePost
     */
    workspaces_create_post_request: WorkspacesCreatePostRequest
}

export interface WorkspacesApiWorkspacesDeleteDeleteRequest {
    /**
     * 
     * @type WorkspacesDeleteDeleteRequest
     * @memberof WorkspacesApiworkspacesDeleteDelete
     */
    workspaces_delete_delete_request: WorkspacesDeleteDeleteRequest
}

export interface WorkspacesApiWorkspacesDetailsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WorkspacesApiworkspacesDetailsGet
     */
    workspace_id?: string
}

export interface WorkspacesApiWorkspacesDriveGetRequest {
}

export interface WorkspacesApiWorkspacesGetRequest {
    /**
     * team Id
     * Defaults to: undefined
     * @type string
     * @memberof WorkspacesApiworkspacesGet
     */
    team_id?: string
}

export interface WorkspacesApiWorkspacesTeamsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WorkspacesApiworkspacesTeamsGet
     */
    team_id?: string
}

export interface WorkspacesApiWorkspacesUpdatePutRequest {
    /**
     * 
     * @type WorkspacesUpdatePutRequest
     * @memberof WorkspacesApiworkspacesUpdatePut
     */
    workspaces_update_put_request: WorkspacesUpdatePutRequest
}

export class ObjectWorkspacesApi {
    private api: ObservableWorkspacesApi

    public constructor(configuration: Configuration, requestFactory?: WorkspacesApiRequestFactory, responseProcessor?: WorkspacesApiResponseProcessor) {
        this.api = new ObservableWorkspacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Create New Workspace
     * @param param the request object
     */
    public createWithHttpInfo(param: WorkspacesApiWorkspacesCreatePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.createWithHttpInfo(param.workspaces_create_post_request,  options).toPromise();
    }

    /**
     * 
     * Create New Workspace
     * @param param the request object
     */
    public create(param: WorkspacesApiWorkspacesCreatePostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.create(param.workspaces_create_post_request,  options).toPromise();
    }

    /**
     * 
     * Delete workspace
     * @param param the request object
     */
    public deleteWithHttpInfo(param: WorkspacesApiWorkspacesDeleteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deleteWithHttpInfo(param.workspaces_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Delete workspace
     * @param param the request object
     */
    public delete(param: WorkspacesApiWorkspacesDeleteDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.delete(param.workspaces_delete_delete_request,  options).toPromise();
    }

    /**
     * 
     * Get Workspace Details
     * @param param the request object
     */
    public getWithHttpInfo(param: WorkspacesApiWorkspacesDetailsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getWithHttpInfo(param.workspace_id,  options).toPromise();
    }

    /**
     * 
     * Get Workspace Details
     * @param param the request object
     */
    public get(param: WorkspacesApiWorkspacesDetailsGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.get(param.workspace_id,  options).toPromise();
    }

    /**
     * 
     * Get Account Drive
     * @param param the request object
     */
    public driveWithHttpInfo(param: WorkspacesApiWorkspacesDriveGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.driveWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * Get Account Drive
     * @param param the request object
     */
    public drive(param: WorkspacesApiWorkspacesDriveGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.drive( options).toPromise();
    }

    /**
     * 
     * Get Workspaces By Team
     * @param param the request object
     */
    public listWithHttpInfo(param: WorkspacesApiWorkspacesGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.listWithHttpInfo(param.team_id,  options).toPromise();
    }

    /**
     * 
     * Get Workspaces By Team
     * @param param the request object
     */
    public list(param: WorkspacesApiWorkspacesGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.list(param.team_id,  options).toPromise();
    }

    /**
     * 
     * Get Team Workspaces
     * @param param the request object
     */
    public byTeamWithHttpInfo(param: WorkspacesApiWorkspacesTeamsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.byTeamWithHttpInfo(param.team_id,  options).toPromise();
    }

    /**
     * 
     * Get Team Workspaces
     * @param param the request object
     */
    public byTeam(param: WorkspacesApiWorkspacesTeamsGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.byTeam(param.team_id,  options).toPromise();
    }

    /**
     * 
     * Update workspace
     * @param param the request object
     */
    public updateWithHttpInfo(param: WorkspacesApiWorkspacesUpdatePutRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.updateWithHttpInfo(param.workspaces_update_put_request,  options).toPromise();
    }

    /**
     * 
     * Update workspace
     * @param param the request object
     */
    public update(param: WorkspacesApiWorkspacesUpdatePutRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.update(param.workspaces_update_put_request,  options).toPromise();
    }

}
